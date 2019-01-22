import { TypeKeys, ActionTypes } from './Actions';
import { State } from "./State";

type Reducer = (s: State, action: ActionTypes) => State;

export const IIIFReducer: Reducer = (state: State, action: ActionTypes) => {
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
                ...state,
                manifestIndex: action.by,
                sequenceIndex: 0,
                canvasIndex: 0,
                rangeId: null,
                xywh: null,
                rotation: null
            };
        case TypeKeys.CHANGE_SEQUENCE:
            return { 
                ...state,
                sequenceIndex: action.by,
                canvasIndex: 0,
                rangeId: null,
                xywh: null,
                rotation: null
            };
        case TypeKeys.CHANGE_CANVAS:
            return { 
                ...state,
                canvasIndex: action.by,
                rangeId: null,
                xywh: null,
                rotation: null
            };
        case TypeKeys.CHANGE_RANGE:
            return { 
                ...state,
                rangeId: action.by,
                xywh: null,
                rotation: null 
            };
        case TypeKeys.CHANGE_XYWH:
            return { 
                ...state,
                xywh: action.by
            };
        case TypeKeys.CHANGE_ROTATION:
            return { 
                ...state,
                rotation: action.by
            };
        default:
            return state;
    }
}