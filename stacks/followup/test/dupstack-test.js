"use strict";

const chai = require('chai');
const expect = chai.expect;
const Queue = require(__dirname + '/../lib/Queue');
const Stack = require(__dirname + '/../lib/Stack');
const DuplicateStacks = require(__dirname + '/../lib/DuplicateStacks');

describe(['Stacks and Queues'], function(Example) {
  'use strict';

  //mock stack1 and stack2 same size & content, stack 3 different content, stack4 different size
  let queue0, stack0, stack1, stack2, stack3, stack4;
  let testArr1 = [1, 2, 3],
    testArr2 = [3, 2, 1],
    testArr3 = [1, 2, 3, 4];
  beforeEach(function() {
    stack0 = new Stack();
    queue0 = new Queue();
    stack1 = new Stack();
    testArr1.forEach((item) => {
      stack1.push(item)
    });
    stack2 = new Stack();
    testArr1.forEach((item) => {
      stack2.push(item)
    });
    stack3 = new Stack();
    testArr2.forEach((item) => {
      stack3.push(item)
    });
    stack4 = new Stack();
    testArr3.forEach((item) => {
      stack4.push(item)
    });
  });

  describe('Test Stack', () => {

    it('it should push and peek', () => {
      stack0.push(1);
      expect(stack0.peek()).to.eql(1);
    })
    it('it should pop"', () => {
      stack0.push(1);
      expect(stack0.pop()).to.eql(1);
    });

  });

  describe('Test Queue', () => {
    it('it should enqueue and pass hasNext', () => {
      queue0.enqueue(1);
      expect(queue0.hasNext()).to.eql(true);
    })
    it('it should dequeue"', () => {
      queue0.enqueue(1);
      expect(queue0.dequeue()).to.eql(1);
    });
  });

  describe('Test DuplicateStacks', () => {
    it('it should report true if same size and values', () => {
      expect(DuplicateStacks.equalStacks(stack1, stack2)).to.eql(true);
    })
    it('it should report false if different size"', () => {
      expect(DuplicateStacks.equalStacks(stack1, stack4)).to.eql(false);
    });
    it('it should report false if different values"', () => {
      expect(DuplicateStacks.equalStacks(stack1, stack3)).to.eql(false);
      //expect(QueueModule()).to.eql('Hi from module');
    });
  });
});
