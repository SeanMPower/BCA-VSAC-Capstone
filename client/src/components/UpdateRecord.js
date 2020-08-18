import React from 'react';
//sign in/sign up forms
function UpdateRecord(props) {
    return (
            <div className='update-form-container' style={{display: props.updateModal}} >
            <form id="update-records" onSubmit={props.updateInfo}>
                <label className='instutionName'> Institution Name:
                    <input
                        type='text'
                        name='providerName'
                        id='updated-providername'
                        value={props.updatedProgram.providerName}
                        onChange={props.handleChange} 
                        
                        />
                </label>
                <label className='programName'> Program:
                    <input
                        type='text'
                        name='program'
                        id='updated-program'
                        value={props.updatedProgram.program}
                        onChange={props.handleChange} 
                        
                        />
                </label>
                <label className='InstitutionLink'> Institution Link:
                    <input
                        type='text'
                        name='updatedInstitutionLink'
                        id='updated-institutionlink'
                        value={props.updatedProgram.providerLink}
                        onChange={props.handleChange}
                         
                        />
                </label>
                <label className='programModality'> Modality:
                    <input
                        type='text'
                        name='updatedModality'
                        id='updated-Modality'
                        value={props.updatedProgram.modality}
                        onChange={props.handleChange}
                        
                    />
                </label>
                <label className='programPrice'> Price:
                    <input
                        type='text'
                        name='updatedPrice'
                        id='updated-price'
                        value={props.updatedProgram.price}
                        onChange={props.handleChange}
                        
                    />
                </label>
                <label className='programState'> State:
                    <input
                        type='text'
                        name='updatedState'
                        id='updated-state'
                        value={props.updatedProgram.state}
                        onChange={props.handleChange}
                        
                    />
                </label>
                <label className='programRegion'> Region:
                    <input
                        type='text'
                        name='updatedRegion'
                        id='updated-region'
                        value={props.updatedProgram.region}
                        onChange={props.handleChange}
                        
                    />
                </label>
                <label className='programStartDate'> Start Data:
                    <input
                        type='text'
                        name='updatedStartdate'
                        id='updated-startdate'
                        value={props.updatedProgram.startDate}
                        onChange={props.handleChange}
                        
                    />
                </label>
                <label className='programEndDate'> End Date:
                    <input
                        type='text'
                        name='updatedEnddate'
                        id='updated-enddate'
                        value={props.updatedProgram.endDate}
                        onChange={props.handleChange}
                        
                    />
                </label>
                <label className='programCertification'> Certification:
                    <input
                        type='text'
                        name='updatedCertification'
                        id='updated-certification'
                        value={props.updatedProgram.certification}
                        onChange={props.handleChange}
                        
                    />
                </label>
                <label className='programVtgrant'> VT Grant:
                    <input
                        type='text'
                        name='updatedVtgrant'
                        id='updated-vtgrant'
                        value={props.updatedProgram.VTGrant}
                        onChange={props.handleChange}
                        
                    />
                </label>
                <label className='programPellgrant'> Pell Grant:
                    <input
                        type='text'
                        name='updatedPellgrant'
                        id='updated-pellgrant'
                        value={props.updatedProgram.pell}
                        onChange={props.handleChange}
                        
                    />
                </label>
                <label className='createdBy'> Record Created By:
                    <input
                        type='text'
                        name='updatedRecordCreatedby'
                        id='updated-recordcreatedby'
                        value={props.updatedProgram.recordCreatedBy}
                        onChange={props.handleChange}
                        
                    />
                </label>
                <label className='lastUpdated'> Record Last Updated:
                    <input
                        type='text'
                        name='updatedRecordLastUpdated'
                        id='updated-recordlastupdated'
                        value={props.updatedProgram.lastUpdate}
                        onChange={props.handleChange}
                        
                    />
                </label>
                <label className='contactEmail'> Contact Email:
                    <input
                        type='text'
                        name='updatedContactEmail'
                        id='updated-contactemail'
                        value={props.updatedProgram.contactEmail}
                        onChange={props.handleChange}
                        
                    />
                </label>
                {/* <label className='viewable'> Viewable:
                    <input
                        type='text'
                        name='updatedviewable'
                        id='updated-viewable'
                        value={props.updatedProgram.viewable}
                        onChange={props.handleChange}
                        
                    />
                </label> */}
                <input type='submit' value='Update Records' className='submit' />
                <button onClick={props.closeUpdateModal}>Close
            </button>
            </form>
            
            </div>
        
    )
}

export default UpdateRecord;