import { COMMENTS } from "../../app/shared/COMMENTS";

export const commentsByBatchID = (batchId) => {
    return COMMENTS.filter((comment) => comment.batchId === parseInt(batchId));
}