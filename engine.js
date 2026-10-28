export const SIZE=8;
export const SHAPES={dot:[[0,0]],h2:[[0,0],[0,1]],v2:[[0,0],[1,0]],h3:[[0,0],[0,1],[0,2]],v3:[[0,0],[1,0],[2,0]],h4:[[0,0],[0,1],[0,2],[0,3]],v4:[[0,0],[1,0],[2,0],[3,0]],square:[[0,0],[0,1],[1,0],[1,1]],corner:[[0,1],[1,0],[1,1]],el:[[0,0],[1,0],[2,0],[2,1]],tee:[[0,0],[0,1],[0,2],[1,1]],zig:[[0,0],[0,1],[1,1],[1,2]],big:[[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2]]};
const pool=['h2','h3','v3','square','corner','dot','h4','v2','el','tee','zig','square','h3','v4','big'];
const empty=()=>Array(64).fill(0),fillRow=(b,r,holes)=>{for(let c=0;c<8;c++)if(!holes.includes(c))b[r*8+c]=1+(r+c)%5;};
function recipe(name,subtitle,limit,queue,build,solution){const board=empty();build(board);return{name,subtitle,limit,queue,board,webs:board.flatMap((v,i)=>v?[i]:[]),solution};}
export const RECIPES=[
 recipe(['A sweet beginning','甜蜜开场'],['Clear the sugared shelf.','清理沾满糖霜的架子。'],5,['h3','corner','square'],b=>fillRow(b,6,[2,3,4]),[{slot:0,row:6,col:2}]),
 recipe(['Two spoonfuls','两勺月光'],['Two lines, one little potion.','清理两行，酿一瓶小魔药。'],6,['h2','h2','tee'],b=>{fillRow(b,5,[3,4]);fillRow(b,6,[3,4]);},[{slot:0,row:5,col:3},{slot:1,row:6,col:3}]),
 recipe(['The crossing spell','十字魔法'],['One clever corner can clear two ways.','巧放一个转角，一次清掉横竖两线。'],6,['corner','h4','square'],b=>{fillRow(b,3,[3,4]);for(let r=0;r<8;r++)if(r!==2&&r!==3)b[r*8+4]=1+r%5;},[{slot:0,row:2,col:3}]),
 recipe(['Three secret ingredients','三味秘密配方'],['Plan for every shape in your tray.','为托盘上的每一块安排位置。'],7,['h4','h2','h3'],b=>{fillRow(b,1,[2,3,4,5]);fillRow(b,4,[4,5]);fillRow(b,6,[1,2,3]);},[{slot:0,row:1,col:2},{slot:1,row:4,col:4},{slot:2,row:6,col:1}]),
 recipe(['The midnight feast','午夜盛宴'],['Two double clears finish the feast.','两次双行消除，完成午夜盛宴。'],6,['square','tee','square'],b=>{fillRow(b,2,[2,3]);fillRow(b,3,[2,3]);fillRow(b,5,[4,5]);fillRow(b,6,[4,5]);},[{slot:0,row:2,col:2},{slot:2,row:5,col:4}])
];
export function nextRandom(seed){const n=(Math.imul(seed,1664525)+1013904223)>>>0;return[n,n/4294967296];}
function refill(state){let seed=state.seed,idx=state.nextIndex;const tray=[];for(let k=0;k<3;k++){let shape,color;if(state.mode==='orders'){const recipe=RECIPES[state.level];shape=recipe.queue[idx%recipe.queue.length];color=1+idx%5;}else{let v;[seed,v]=nextRandom(seed);shape=pool[Math.floor(v*pool.length)];[seed,v]=nextRandom(seed);color=1+Math.floor(v*5);}tray.push({id:idx,shape,color});idx++;}return{...state,seed,nextIndex:idx,tray};}
export function newClassic(seed=Date.now()>>>0){return refill({mode:'classic',level:0,board:empty(),webs:[],initialWebs:0,tray:[],moves:0,score:0,combo:0,totalLines:0,seed,nextIndex:0,done:false,over:false});}
export function newOrder(level){const r=RECIPES[level];if(!r)throw new Error('Unknown order');return refill({mode:'orders',level,board:[...r.board],webs:[...r.webs],initialWebs:r.webs.length,tray:[],moves:0,score:0,combo:0,totalLines:0,seed:0,nextIndex:0,done:false,over:false});}
export function footprint(piece,row,col){return SHAPES[piece.shape].map(([r,c])=>[row+r,col+c]);}
export function canPlace(board,piece,row,col){return!!piece&&footprint(piece,row,col).every(([r,c])=>r>=0&&r<8&&c>=0&&c<8&&!board[r*8+c]);}
export function anyMove(state){return state.tray.some(p=>p&&state.board.some((_,i)=>canPlace(state.board,p,Math.floor(i/8),i%8)));}
// Validate the complete saved payload before any renderer or placement rule sees it.
export function validateClassicSave(saved){
  if(!saved||typeof saved!=='object'||Array.isArray(saved)||![0,1].includes(saved.rewinds))return false;
  const s=saved.state,integer=n=>Number.isSafeInteger(n)&&n>=0;
  if(!s||typeof s!=='object'||Array.isArray(s)||s.mode!=='classic'||s.level!==0||s.done!==false||typeof s.over!=='boolean')return false;
  if(!Array.isArray(s.board)||s.board.length!==64||!Array.from(s.board).every(n=>Number.isInteger(n)&&n>=0&&n<=5))return false;
  if(!Array.isArray(s.webs)||s.webs.length!==0||s.initialWebs!==0)return false;
  if(!['moves','score','combo','totalLines','seed','nextIndex'].every(k=>integer(s[k]))||s.seed>4294967295||s.nextIndex<3||s.nextIndex%3!==0)return false;
  if(s.nextIndex!==3*(Math.floor(s.moves/3)+1)||s.combo>s.moves||s.totalLines>s.moves*16)return false;
  if(!Array.isArray(s.tray)||s.tray.length!==3||!Array.from(s.tray).every((p,i)=>p===null||(p&&typeof p==='object'&&!Array.isArray(p)&&p.id===s.nextIndex-3+i&&typeof p.shape==='string'&&Object.hasOwn(SHAPES,p.shape)&&Number.isInteger(p.color)&&p.color>=1&&p.color<=5)))return false;
  if(s.tray.filter(p=>p!==null).length!==3-s.moves%3)return false;
  return s.over===!anyMove(s);
}
export function completedLines(board){const rows=[],cols=[];for(let i=0;i<8;i++){if(Array.from({length:8},(_,c)=>board[i*8+c]).every(Boolean))rows.push(i);if(Array.from({length:8},(_,r)=>board[r*8+i]).every(Boolean))cols.push(i);}const cells=new Set();rows.forEach(r=>{for(let c=0;c<8;c++)cells.add(r*8+c)});cols.forEach(c=>{for(let r=0;r<8;r++)cells.add(r*8+c)});return{rows,cols,cells:[...cells]};}
export function place(state,slot,row,col){const piece=state.tray[slot];if(state.done||state.over||!piece||!canPlace(state.board,piece,row,col))return null;const board=[...state.board],placed=footprint(piece,row,col).map(([r,c])=>r*8+c);placed.forEach(i=>board[i]=piece.color);const clear=completedLines(board),lineCount=clear.rows.length+clear.cols.length,cleared=new Set(clear.cells),webs=state.webs.filter(i=>!cleared.has(i)),caught=state.webs.length-webs.length;clear.cells.forEach(i=>board[i]=0);const tray=[...state.tray];tray[slot]=null;const combo=lineCount?state.combo+1:0;let next={...state,board,webs,tray,moves:state.moves+1,totalLines:state.totalLines+lineCount,combo,score:state.score+placed.length+clear.cells.length*10+Math.max(0,lineCount-1)*20+Math.max(0,combo-1)*5};next.done=next.mode==='orders'&&webs.length===0;if(!next.done&&tray.every(p=>p===null))next=refill(next);next.over=!next.done&&((next.mode==='orders'&&next.moves>=RECIPES[next.level].limit)||!anyMove(next));return{state:next,cleared:clear.cells,lines:lineCount,caught,placed};}
