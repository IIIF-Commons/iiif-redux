import { TypeKeys, ActionTypes } from './Actions';
import { State } from "./State";

type Reducer = (s: State, action: ActionTypes) => State;

export const IIIFReducer: Reducer = (s: State, action: ActionTypes) => {
    switch (action.type) {
        case TypeKeys.CHANGE_COLLECTION:
            return { 
                collectionIndex: action.by,
                manifestIndex: 0,
                sequenceIndex: 0,
                canvasIndex: 0,
                rangeId: null,
                xywh: null,
                rotation: null
            };
        case TypeKeys.CHANGE_MANIFEST:
            return { 
                collectionIndex: s.collectionIndex,
                manifestIndex: action.by,
                sequenceIndex: 0,
                canvasIndex: 0,
                rangeId: null,
                xywh: null,
                rotation: null
            };
        case TypeKeys.CHANGE_SEQUENCE:
            return { 
                collectionIndex: s.collectionIndex,
                manifestIndex: s.manifestIndex,
                sequenceIndex: action.by,
                canvasIndex: 0,
                rangeId: null,
                xywh: null,
                rotation: null
            };
        case TypeKeys.CHANGE_CANVAS:
            return { 
                collectionIndex: s.collectionIndex,
                manifestIndex: s.manifestIndex,
                sequenceIndex: s.sequenceIndex,
                canvasIndex: action.by,
                rangeId: null,
                xywh: null,
                rotation: null
            };
        case TypeKeys.CHANGE_RANGE:
            return { 
                collectionIndex: s.collectionIndex,
                manifestIndex: s.manifestIndex,
                sequenceIndex: s.sequenceIndex,
                canvasIndex: s.canvasIndex,
                rangeId: action.by,
                xywh: null,
                rotation: null 
            };
        case TypeKeys.CHANGE_XYWH:
            return { 
                collectionIndex: s.collectionIndex,
                manifestIndex: s.manifestIndex,
                sequenceIndex: s.sequenceIndex,
                canvasIndex: s.canvasIndex,
                rangeId: s.rangeId,
                xywh: action.by,
                rotation: s.rotation
            };
        case TypeKeys.CHANGE_ROTATION:
            return { 
                collectionIndex: s.collectionIndex,
                manifestIndex: s.manifestIndex,
                sequenceIndex: s.sequenceIndex,
                canvasIndex: s.canvasIndex,
                rangeId: s.rangeId,
                xywh: s.xywh,
                rotation: action.by
            };
        default:
            return s;
    }
}