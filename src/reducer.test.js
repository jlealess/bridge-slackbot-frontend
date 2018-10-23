import {  reducer, INITIAL_STATE } from './reducer.js';

describe('REDUCER: reducer', () => {
    it('INITIAL STATE: It should return initial state if no state is passed in: ', () => {
        const state = reducer();
        expect(state).toEqual(INITIAL_STATE)
    });    
});
