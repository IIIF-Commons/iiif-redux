import { TypeKeys, ChangeCollectionAction, ChangeManifestAction, ChangeSequenceAction, ChangeCanvasAction, ChangeRangeAction, ChangeXYWHAction, ChangeRotationAction } from './Actions';

export const changeCollection = (by: number): ChangeCollectionAction => ({
    type: TypeKeys.CHANGE_COLLECTION,
    by
});

export const changeManifest = (by: number): ChangeManifestAction => ({
    type: TypeKeys.CHANGE_MANIFEST,
    by
});

export const changeSequence = (by: number): ChangeSequenceAction => ({
    type: TypeKeys.CHANGE_SEQUENCE,
    by
});

export const changeCanvas = (by: number): ChangeCanvasAction => ({
    type: TypeKeys.CHANGE_CANVAS,
    by
});

export const changeRange = (by: string | null): ChangeRangeAction => ({
    type: TypeKeys.CHANGE_RANGE,
    by
});

export const changeXYWH = (by: string): ChangeXYWHAction => ({
    type: TypeKeys.CHANGE_XYWH,
    by
});

export const changeRotation = (by: number): ChangeRotationAction => ({
    type: TypeKeys.CHANGE_ROTATION,
    by
});