export enum TypeKeys {
    CHANGE_COLLECTION = "CHANGE_COLLECTION",
    CHANGE_MANIFEST = "CHANGE_MANIFEST",
    CHANGE_SEQUENCE = "CHANGE_SEQUENCE",
    CHANGE_CANVAS = "CHANGE_CANVAS",
    CHANGE_RANGE = "CHANGE_RANGE",
    CHANGE_XYWH = "CHANGE_XYWH",
    CHANGE_ROTATION = "CHANGE_ROTATION",
    OTHER = "OTHER"
}

export type ActionTypes = 
    | ChangeCollectionAction
    | ChangeManifestAction
    | ChangeSequenceAction
    | ChangeCanvasAction
    | ChangeRangeAction
    | ChangeXYWHAction
    | ChangeRotationAction 
    | OtherAction;

export interface ChangeCollectionAction {
    type: TypeKeys.CHANGE_COLLECTION;
    by: number;
}

export interface ChangeManifestAction {
    type: TypeKeys.CHANGE_MANIFEST;
    by: number;
}

export interface ChangeSequenceAction {
    type: TypeKeys.CHANGE_SEQUENCE;
    by: number;
}

export interface ChangeCanvasAction {
    type: TypeKeys.CHANGE_CANVAS;
    by: number;
}

export interface ChangeRangeAction {
    type: TypeKeys.CHANGE_RANGE;
    by: string | null;
}

export interface ChangeXYWHAction {
    type: TypeKeys.CHANGE_XYWH;
    by: string;
}

export interface ChangeRotationAction {
    type: TypeKeys.CHANGE_ROTATION;
    by: number;
}

export interface OtherAction {
    type: TypeKeys.OTHER;
    by: null;
}