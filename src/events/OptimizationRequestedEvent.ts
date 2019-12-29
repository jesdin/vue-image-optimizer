import { UppyFile } from "@uppy/core";

export interface OptimizationRequestedEvent {
    width: number
    height: number
    quality: number
    shouldMaintainAspectRatio: boolean
    files: Array<UppyFile<{}, {}>>
}
