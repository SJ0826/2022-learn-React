import produce from 'immer'

const state = {
    number: 1,
    donChangeMe: 2
};

const nextState = produce(state, draft => {
    draft.number += 1;
});

nextState(); 
