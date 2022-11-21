import React from 'react'
// import MapContainer from './GoogleMap'

export const PhoneContact = () => {
    return (
        <div>
            <div className='row contact-us-image'>
                <h1> <i className='fa fa-phone fa-lg' /> </h1>
            </div>
            <div className='row contact-us-title'>
                <h5> ಇನ್ನು ಹೆಚ್ಚು ತಿಳಿದುಕೊಳ್ಳಲು ಆಸಕ್ತಿ ಇದೆಯೇ? ನಮ್ಮೊಂದಿಗೆ ಮಾತನಾಡಲು ಕೆಳಗಿನ ಸಂಖ್ಯೆಗೆ ಕರೆ ಮಾಡಿ. </h5>
            </div>
            <div className='row phone-contact-us-values'>
                <a
                    role='button'
                    className='btn btn-link'
                    href='tel:+919743857309'
                >
                    <h5> <i>+919743857309</i> </h5>
                </a>

            </div>
            <div>
                <p> <b> ಗಮನವಿರಲಿ : </b> ಬೆಳಿಗ್ಗೆ 10 ರಿಂದ ಸಾಯಂಕಾಲ 5 ವರಗೆ ತರಗತಿಯ ಸಮಯ, ನಿಮ್ಮ ಕರೆಯನ್ನು ಉತ್ತರಿಸದಿಲ್ಲವಾದಲ್ಲಿ. ಅದೇ ಸಂಖ್ಯೆಗೆ ವಾಟ್'ಸ್ ಆಪ್ ಅಥವಾ SMS ಮಾಡಬಹುದು. ನಿಮಗೆ ನಾವು ನಂತರ ಕರೆ ಮಾಡುತ್ತೇವೆ.</p>
            </div>


        </div>
    )
}

export const EmailContact = () => {
    return (
        <div>
            <div className='row contact-us-image'>
                <h1> <i className='fa fa-envelope-o fa-lg' /> </h1>
            </div>
            <div className='row contact-us-title'>
                <h5> ಇಮೇಲ್ ಮೂಲಕವೂ ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಬಹುದು. ನಮ್ಮ ವಿಳಾಸ ಕೆಳಕಂಡಂತೆ ಇರುತ್ತದೆ.</h5>
            </div>
            <div className='row email-contact-us-values'>
                <h5>
                    <a
                        role='button'
                        className='btn btn-link'
                        href='mailto:mncchosaritti@gmail.com'
                    >
                        mncchosaritti@gmail.com
                    </a>
                </h5>
            </div>
            <div>
                <p> <b> ಗಮನವಿರಲಿ </b>: ಒಂದೆರಡು ದಿನದಲ್ಲಿ ನಿಮ್ಮ ಇಮೇಲ್ಗೆ ಉತ್ತರಿಸಲಾಗುವುದು. ತುರ್ತು ಗಮನಕ್ಕೆ ಮೇಲೆ ತಿಳಿಸಿರುವ ಸಂಖ್ಯೆಗೆ ಕರೆ ಮಾಡಿ.</p>
            </div>
        </div>
    )
}

export const PhysicalAddress = () => {
    return (
        <div >
            <div className='row contact-us-image'>
                <h1> <i className='fa fa-id-card fa-lg' /> </h1>
            </div>
            <div className='row contact-us-title'>
                <h5> ನಮ್ಮ ವಿಳಾಸ.</h5>
            </div>
            <div>
                <p> ಶ್ರೀ ಮೃತ್ಯುಂಜಯ ನವೋದಯ ಕೋಚಿಂಗ್ ಕ್ಲಾಸ್
                    <br /> ಮಾಲತೇಶ.ಪ.ಬೆಟಗೇರಿ
                    <br /> ಅಟ್/ಪೋಸ್ಟ್ : ಹೋಸರಿತ್ತಿ
                    <br />ತಾಲೂಕ/ಜಿಲ್ಲಾ : ಹಾವೇರಿ
                    <br />ಕರ್ನಾಟಕ - 581213 </p>
            </div>
            {/* <div className='row physical-address-values'>
                <MapContainer />
            </div> */}
        </div>
    )
}
