import expect from 'expect';
import deepFreeze from 'deepfreeze';
import visibilityFilter from './visibilityFilter.js';


describe('visibilityFilter reducer', () => {
    it('should change filter', () => {
        const stateBefore = 'SHOW_ALL';
        const action = {
            type: 'SET_VISIBILITY',
            filter: 'SHOW_ACTIVE'
        }

        const stateAfter = 'SHOW_ACTIVE';
        deepFreeze(stateBefore);
        deepFreeze(action);
    
        expect(
            visibilityFilter(stateBefore, action)
        ).toEqual(stateAfter);
    })
})