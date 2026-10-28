import test from 'node:test';import assert from 'node:assert/strict';
import {RECIPES,SHAPES,newClassic,newOrder,canPlace,place,anyMove,completedLines,validateClassicSave} from '../engine.js';
test('same seed reproduces the initial and subsequent trays',()=>{const a=newClassic(123),b=newClassic(123);assert.deepEqual(a.tray,b.tray);assert.deepEqual(a,b);});
test('placement enforces all cells and never mutates the old state',()=>{const s=newClassic(1);s.tray=[{id:0,shape:'square',color:2},null,null];assert.equal(canPlace(s.board,s.tray[0],7,7),false);const r=place(s,0,0,0);assert.ok(r);assert.equal(s.board[0],0);assert.equal(r.state.board[0],2);assert.equal(canPlace(r.state.board,{shape:'dot'},0,0),false);});
test('row and column intersections clear once',()=>{const b=Array(64).fill(0);for(let i=0;i<8;i++){b[3*8+i]=1;b[i*8+4]=1;}const c=completedLines(b);assert.equal(c.rows.length+c.cols.length,2);assert.equal(c.cells.length,15);});
test('tray refills only after all three pieces are used',()=>{let s=newClassic(3);s.tray=[{id:0,shape:'dot',color:1},{id:1,shape:'dot',color:1},{id:2,shape:'dot',color:1}];s=place(s,0,0,0).state;assert.equal(s.tray[0],null);s=place(s,1,0,1).state;assert.equal(s.tray[0],null);s=place(s,2,0,2).state;assert.ok(s.tray.every(Boolean));});
test('a remaining playable piece prevents false game over',()=>{const s=newClassic(4);s.board=Array(64).fill(1);s.board[0]=0;s.tray=[{shape:'square',color:1},{shape:'dot',color:2},null];assert.equal(anyMove(s),true);s.tray[1]=null;assert.equal(anyMove(s),false);});
for(let i=0;i<RECIPES.length;i++)test('order '+(i+1)+' completes along its verified path',()=>{let s=newOrder(i);for(const step of RECIPES[i].solution){const result=place(s,step.slot,step.row,step.col);assert.ok(result);s=result.state;}assert.equal(s.webs.length,0);assert.equal(s.done,true);assert.equal(s.over,false);assert.ok(s.moves<=RECIPES[i].limit);});
test('failed and finished orders reject further placements',()=>{let s=newOrder(0);s.moves=4;const bad=place(s,0,0,0);assert.ok(bad.state.over);assert.equal(place(bad.state,1,2,0),null);const done=place(newOrder(0),0,6,2).state;assert.equal(place(done,1,2,0),null);});
test('classic save validation accepts real new, partial, refilled and terminal rounds',()=>{
  let s=newClassic(123),sawRefill=false;
  for(let turn=0;turn<200;turn++){
    for(const rewinds of [0,1])assert.equal(validateClassicSave(JSON.parse(JSON.stringify({state:s,rewinds}))),true);
    if(s.over)break;
    let next=null;
    for(let slot=0;slot<3&&!next;slot++)for(let cell=0;cell<64&&!next;cell++)next=place(s,slot,Math.floor(cell/8),cell%8);
    assert.ok(next);if(next.state.nextIndex>s.nextIndex)sawRefill=true;s=next.state;
  }
  assert.ok(sawRefill);assert.ok(s.over,'fixture reaches a terminal round');
});
test('corrupted saves are rejected before shapes, webs, counters or colors can crash restore',()=>{
  const valid={state:newClassic(123),rewinds:1};
  const corrupt=[
    x=>{x.state.tray[0].shape='missing-shape'},
    x=>{x.state.tray[0].shape='constructor'},
    x=>{delete x.state.webs},
    x=>{x.state.webs=[0]},
    x=>{x.state.initialWebs=1},
    x=>{x.state.board[0]=6},
    x=>{x.state.board[0]=1.5},
    x=>{x.state.board[0]=null},
    x=>{x.state.board.pop()},
    x=>{x.state.tray[0].color=0},
    x=>{x.state.tray[0].id=99},
    x=>{x.state.tray[0]='h2'},
    x=>{x.state.tray=[null,null,null]},
    x=>{x.state.tray.pop()},
    x=>{delete x.state.totalLines},
    x=>{x.state.score=-1},
    x=>{x.state.seed=4294967296},
    x=>{x.state.moves=0.5},
    x=>{x.state.nextIndex=6},
    x=>{x.state.over=true},
    x=>{x.state.done=true},
    x=>{x.rewinds=2},
    x=>{delete x.rewinds}
  ];
  for(const change of corrupt){const saved=structuredClone(valid);change(saved);assert.equal(validateClassicSave(saved),false,String(change));}
  for(const saved of [null,[],{},false,1,'save',{state:newOrder(0),rewinds:1}])assert.equal(validateClassicSave(saved),false);
});
