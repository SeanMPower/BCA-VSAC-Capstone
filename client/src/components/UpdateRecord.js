import React from 'react';
//sign in/sign up forms
function UpdateRecord(props) {
    return (
        
            <div className='form-container'>
            <form id="update-records" onSubmit={props.updateInfo}>
                <label className='instutionName'> Institution Name:
                    <input
                        type='text'
                        name='updatedProviderName'
                        id='updated-providername'
                        value={props.updatedProviderName}
                        onChange={props.handleChange} />
                </label>
                <label className='programName'> Program:
                    <input
                        type='text'
                        name='updatedProgram'
                        id='updated-program'
                        value={props.updatedProgram}
                        onChange={props.handleChange} />
                </label>
                <label className='InstitutionLink'> Institution Link:
                    <input
                        type='text'
                        name='updatedInstitutionLink'
                        id='updated-institutionlink'
                        value={props.updatedInstitutionLink}
                        onChange={props.handleChange} />
                </label>
                <label className='programModality'> Modality:
                    <input
                        type='text'
                        name='updatedModality'
                        id='updated-Modality'
                        value={props.updatedModality}
                        onChange={props.handleChange}
                    />
                </label>
                <label className='programPrice'> Price:
                    <input
                        type='text'
                        name='updatedPrice'
                        id='updated-price'
                        value={props.updatedPrice}
                        onChange={props.handleChange}
                    />
                </label>
                <label className='programState'> State:
                    <input
                        type='text'
                        name='updatedState'
                        id='updated-state'
                        value={props.updatedState}
                        onChange={props.handleChange}
                    />
                </label>
                <label className='programRegion'> Region:
                    <input
                        type='text'
                        name='updatedRegion'
                        id='updated-region'
                        value={props.updatedRegion}
                        onChange={props.handleChange}
                    />
                </label>
                <label className='programStartDate'> Start Data:
                    <input
                        type='text'
                        name='updatedStartdate'
                        id='updated-startdate'
                        value={props.updatedStartdate}
                        onChange={props.handleChange}
                    />
                </label>
                <label className='programEndDate'> End Date:
                    <input
                        type='text'
                        name='updatedEnddate'
                        id='updated-enddate'
                        value={props.updatedEnddate}
                        onChange={props.handleChange}
                    />
                </label>
                <label className='programCertification'> Certification:
                    <input
                        type='text'
                        name='updatedCertification'
                        id='updated-certification'
                        value={props.updatedCertification}
                        onChange={props.handleChange}
                    />
                </label>
                <label className='programVtgrant'> VT Grant:
                    <input
                        type='text'
                        name='updatedVtgrant'
                        id='updated-vtgrant'
                        value={props.updatedVtgrant}
                        onChange={props.handleChange}
                    />
                </label>
                <label className='programPellgrant'> Pell Grant:
                    <input
                        type='text'
                        name='updatedPellgrant'
                        id='updated-pellgrant'
                        value={props.updatedPellgrant}
                        onChange={props.handleChange}
                    />
                </label>
                <label className='createdBy'> Record Created By:
                    <input
                        type='text'
                        name='updatedRecordCreatedby'
                        id='updated-recordcreatedby'
                        value={props.updatedRecordCreatedby}
                        onChange={props.handleChange}
                    />
                </label>
                <label className='lastUpdated'> Record Last Updated:
                    <input
                        type='text'
                        name='updatedRecordLastUpdated'
                        id='updated-recordlastupdated'
                        value={props.updatedRecordLastUpdated}
                        onChange={props.handleChange}
                    />
                </label>
                <label className='contactEmail'> Contact Email:
                    <input
                        type='text'
                        name='updatedContactEmail'
                        id='updated-contactemail'
                        value={props.updatedContactEmail}
                        onChange={props.handleChange}
                    />
                </label>
                <label className='viewable'> Viewable:
                    <input
                        type='text'
                        name='updatedviewable'
                        id='updated-viewable'
                        value={props.updatedviewable}
                        onChange={props.handleChange}
                    />
                </label>
                <input type='submit' value='Update Records' className='submit' />
            </form>
            </div>
        
    )
}

export default UpdateRecord;