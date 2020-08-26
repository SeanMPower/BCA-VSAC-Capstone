import React from 'react';

// This is the update record form for the Provider landing page
function UpdateRecordProvider(props) {
    return (
            <div className='update-form-container modal' style={{display: props.updateModal}} >
            <form id="update-records" onSubmit={props.updateInfo}>
                <label className='institutionName'> Institution Name:{" "}
                    <input
                        type='text'
                        name='providerName'
                        id='updated-providername'
                        value={props.updatedProgram.providerName}
                        onChange={props.handleChange} 
                        
                        />
                </label>
                <label className='programName'> Program:{" "}
                    <input
                        type='text'
                        name='program'
                        id='updated-program'
                        value={props.updatedProgram.program}
                        onChange={props.handleChange} 
                        
                        />
                </label>
                <label className='institutionLink'> Institution Link:{" "}
                    <input
                        type='text'
                        name='providerLink'
                        id='updated-institutionlink'
                        value={props.updatedProgram.providerLink}
                        onChange={props.handleChange}
                         
                        />
                </label>
                <label className='programModality'> Modality:{" "}
                    <input
                        type='text'
                        name='modality'
                        id='updated-Modality'
                        value={props.updatedProgram.modality}
                        onChange={props.handleChange}
                        
                    />
                </label>
                <label className='programPrice'> Price:{" "}
                    <input
                        type='text'
                        name='price'
                        id='updated-price'
                        value={props.updatedProgram.price}
                        onChange={props.handleChange}
                        
                    />
                </label>
                <label className='programState'> State:{" "}
                    <input
                        type='text'
                        name='state'
                        id='updated-state'
                        value={props.updatedProgram.state}
                        onChange={props.handleChange}
                        
                    />
                </label>
                <label className='programRegion'> Region:{" "}
                    <input
                        type='text'
                        name='region'
                        id='updated-region'
                        value={props.updatedProgram.region}
                        onChange={props.handleChange}
                        
                    />
                </label>
                <label className='programStartDate'> Start Date:{" "}
                    <input
                        type='text'
                        name='startDate'
                        id='updated-startdate'
                        value={props.updatedProgram.startDate}
                        onChange={props.handleChange}
                        
                    />
                </label>
                <label className='programEndDate'> End Date:{" "}
                    <input
                        type='text'
                        name='endDate'
                        id='updated-enddate'
                        value={props.updatedProgram.endDate}
                        onChange={props.handleChange}
                        
                    />
                </label>
                <label className='programCertification'> Certification:{" "}
                    <input
                        type='text'
                        name='certification'
                        id='updated-certification'
                        value={props.updatedProgram.certification}
                        onChange={props.handleChange}
                        
                    />
                </label>
                <label className='programVtgrant'> VT Grant:{" "}
                    <input
                        type='text'
                        name='VTGrant'
                        id='updated-vtgrant'
                        value={props.updatedProgram.VTGrant}
                        onChange={props.handleChange}
                        
                    />
                </label>
                <label className='programPellgrant'> Pell Grant:{" "}
                    <input
                        type='text'
                        name='pellgrant'
                        id='updated-pellgrant'
                        value={props.updatedProgram.pell}
                        onChange={props.handleChange}
                        
                    />
                </label>
                <label className='createdBy'> Record Created By:{" "}
                    <input
                        type='text'
                        name='recordCreatedby'
                        id='updated-recordcreatedby'
                        value={props.updatedProgram.recordCreatedBy}
                        onChange={props.handleChange}
                        
                    />
                </label>
                <label className='lastUpdated'> Record Last Updated:{" "}
                    <input
                        type='text'
                        name='lastUpdate'
                        id='updated-recordlastupdated'
                        value={props.updatedProgram.lastUpdate}
                        onChange={props.handleChange}
                        
                    />
                </label>
                <label className='contactEmail'> Contact Email:{" "}
                    <input
                        type='text'
                        name='contactEmail'
                        id='updated-contactemail'
                        value={props.updatedProgram.contactEmail}
                        onChange={props.handleChange}
                        
                    />
                </label>
                
                <input type='submit' value='Update Record' className='submit' />
                <button onClick={props.closeUpdateModal} className='button'>Close
            </button>
            </form>
            
            </div>
        
    )
}

export default UpdateRecordProvider;