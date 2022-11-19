import React from 'react'
import Comment from './Comment'
import { commentsByBatchID } from '../comments/commentSlice'
import { Container } from 'reactstrap'

const CommentList = (batchId) => {
    const { batchId: selectId } = batchId
    const finalComments = commentsByBatchID(selectId)
    const displayConditionalComment = () => {
        if (finalComments.length > 0) {
            finalComments.map((comment) => {
                return (
                    <Container key={comment.id}>
                        <Comment comment={comment} />
                    </Container>
                );
            })
        } else {
            return (
                <h3>
                    Nothing display..!
                </h3>
            )
        }
    }
    return (
        <Container>
            {
                (finalComments.length > 0) ?
                    finalComments.map((comment) => {
                        return (
                            <Container key={comment.id}>
                                <Comment comment={comment} />
                            </Container>
                        );
                    }) :
                    (
                        <h4>
                            <b>ಸದ್ಯಕ್ಕೆ ಯಾವುದೇ ಅನಿಸಿಕೆ ಲಭ್ಯವಿಲ್ಲ..! </b>
                        </h4>
                    )
            }
            <h5>
                <b color='primary'> ನೀವು ಈ ಬ್ಯಾಚ್ ನ ವಿದ್ಯಾರ್ಥಿ ಅಥವಾ ಪೋಷಕರಾದಲ್ಲಿ ನಿಮ್ಮ ಅನಿಸಿಕೆಗಳನ್ನೂ ಇಮೇಲ್ ಮೂಲಕ ನಮಗೆ ತಿಳಿಸಬಹುದು</b>
            </h5>
            <h6>
                ಅಭಿಪ್ರಾಯ ಕಳುಹಿಸಿ ಈ ಇಮೇಲ್ ಗೆ : <i> <b> mncchosaritti@gmail.com</b> </i>
                <br />
                ವಿಷಯ : ವಿದ್ಯಾರ್ಥಿ/ಪೋಷಕರ ಹೆಸರು, ಬ್ಯಾಚ್ 2010 - 11
                <br />
                ವಿವರಣೆ : " ನಿಮ್ಮ ಅನಿಸಿಕೆ, ಅಭಿಪ್ರಾಯ ನಮ್ಮ ಸಂಸ್ಥೆಯನ್ನು ಸದೃಢಗೊಳಿಸಲು ಸಹಾಯವಾಗುತ್ತದೆ "
            </h6>
        </Container>
    )

}

export default CommentList