import { changeCollection, changeManifest, changeSequence, changeCanvas, changeRange, changeXYWH, changeRotation } from './ActionCreators';
import { State } from "./State";
import { Store, createStore } from 'redux';
import { IIIFReducer } from './Reducer';

const initialState: State = <State>{
    collectionIndex: 0,
    manifestIndex: 1,
    sequenceIndex: 2,
    canvasIndex: 3,
    rangeId: 'http://example.com/rangeid',
    xywh: '0,0,1000,1000',
    rotation: 90 
};

let app: Element;

const render = () => {

    app.innerHTML = '';

    const value: HTMLHeadingElement = document.createElement('h2');
    value.innerText = JSON.stringify(store.getState(), null, '\t');
    app.appendChild(value);

    const incrementCollectionButton = document.createElement('button');
    incrementCollectionButton.textContent = "increment collection index";
    incrementCollectionButton.onclick = () => {
        store.dispatch(changeCollection(store.getState().collectionIndex + 1));
    }
    app.appendChild(incrementCollectionButton);

    const incrementManifestButton = document.createElement('button');
    incrementManifestButton.textContent = "increment manifest index";
    incrementManifestButton.onclick = () => {
        store.dispatch(changeManifest(store.getState().manifestIndex + 1));
    }
    app.appendChild(incrementManifestButton);

    const incrementSequenceButton = document.createElement('button');
    incrementSequenceButton.textContent = "increment sequence index";
    incrementSequenceButton.onclick = () => {
        store.dispatch(changeSequence(store.getState().sequenceIndex + 1));
    }
    app.appendChild(incrementSequenceButton);

    const incrementCanvasButton = document.createElement('button');
    incrementCanvasButton.textContent = "increment canvas index";
    incrementCanvasButton.onclick = () => {
        store.dispatch(changeCanvas(store.getState().canvasIndex + 1));
    }
    app.appendChild(incrementCanvasButton);

    const rangeText = document.createElement('input');
    rangeText.type = 'text';
    rangeText.placeholder = 'rangeId';
    rangeText.value = String(store.getState().rangeId);
    rangeText.onchange = function(ev: any) {
        store.dispatch(changeRange(ev.target.value || null));
    }
    app.appendChild(rangeText);

    const xywhText = document.createElement('input');
    xywhText.type = 'text';
    xywhText.placeholder = 'xywh';
    xywhText.value = String(store.getState().xywh);
    xywhText.onchange = function(ev: any) {
        if (ev.target.value.split(',').length === 4) {
            store.dispatch(changeXYWH(ev.target.value));
        }
    }
    app.appendChild(xywhText);

    const rotationText = document.createElement('input');
    rotationText.type = 'text';
    rotationText.placeholder = 'rotation';
    rotationText.value = String(store.getState().rotation);
    rotationText.onchange = function(ev: any) {
        if (ev.target.value === '90' || ev.target.value === '180' || ev.target.value === '270') {
            store.dispatch(changeRotation(Number(ev.target.value)));
        }
    }
    app.appendChild(rotationText);
};

const store: Store<State> = createStore(IIIFReducer, initialState);

store.subscribe(render);

window.addEventListener('DOMContentLoaded', () => {
    app = document.querySelector('#app') as Element;
    render();
});