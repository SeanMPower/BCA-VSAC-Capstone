import React from 'react';
import FlatfileImporter from "flatfile-csv-importer"
import axios from 'axios'

FlatfileImporter.setVersion(2)

const license = '1280cf65-f3a7-4b26-ae74-90288f0c5e85'

const flatfileConfig = {
    type: "vsacDb-import",
    fields: [
        {
            label: "Provider Name",
            key: "providerName",
            description: "Name of the School or Institution",
            alternates: ["School", "University", "Institution", "College"]
        },
        {
            label: "Program Name",
            key: "program",
            description: "Name of the Program/Course Offered",
            alternates: ["Course"]
        },
        {
            label: "Certification or Credential",
            key: "certification",
            description: "What Credential or Certification Results Upon Successful Completion of the Course",
            alternates: ["Degree"]
        },
        {
            label: "State",
            key: "state",
            description: "Home State of School or Institution",
            alternates: ["Province"]
        },
        {
            label: "County",
            key: "region",
            description: "Home County of School or Institution"
        },
        {
            label: "Mode of Instruction",
            key: "modality",
            description: "Is Your Program/Course Being Offered Online, In-Person, or Both?"
        },
        {
            label: "Cost of Program",
            key: "price",
            description: "Total Cost of Program/Course Before Aid",
            alternates: ["Price", "Tuition"],
            validators: [{validate: "required"}, {validate: "regex_matches", regex: "^\d{2,8}$", error: "Only number characters allowed (no $)"}]
        },
        {
            label: "Pell Grant Eligible?",
            key: "pell",
            description: "Is this Program/Course Eligible for a Pell Grant?"
        },
        {
            label: "VT Grant Eligible?",
            key: "VTGrant",
            description: "Is this Program/Course Eligible for a VT Grant?"
        },
        {
            label: "Program Start Date",
            key: "startDate",
            description: "What Date Does the Program/Course Begin?",
            alternates: ["Begins"]
        },
        {
            label: "Program End Date",
            key: "endDate",
            description: "What Date Does the Program/Course End?",
            alternates: ["Ends"]
        },
        {
            label: "Provider Website",
            key: "providerLink",
            description: "Please Provide a URL to your Program/Course Information",
            alternates: ["Link"]
        },
        {
            label: "Program Contact Email",
            key: "contactEmail",
            description: "Please provide an email address for who to contact regarding the program/course",
            alternates: ["Contact", "email"]
        },
        {
            label: "Record Created By",
            key: "recordCreatedBy",
            description: "Initials or name of person creating this record"
        },
        {
            label: "Record Created On",
            key: "lastUpdate",
            description: "Date that this entry was created",
            alternates: ["Date"]
        },
    ]
}

const importer = new FlatfileImporter(license, flatfileConfig)

importer.setCustomer ({
     userId: "12345"
})

const launchFlatfile = (uid) => {
    importer.requestDataFromUser().then(results => {
        importer.displayLoader();
        setTimeout( () => {
            importer.displaySuccess("Successful Upload");
            //console.log(results)
            let dataSet = results.validData

            let payload = {
                uid: uid,
                data: dataSet
            }
            // for (let data of dataSet) {
                
            // }
            axios.post('/user', 
              payload).then((res) => {
                console.log(res)
              })



        },  1500)
    })
}

function CSVReader(props) {
    return (
        <div className="csv-reader">
            <button id="csv-button" uid={props.uid} onClick={() => {launchFlatfile(props.uid)}}>
                Click Here <br />to Upload CSV File <br />or Manually Input Program Data
            </button>
        </div>
    )
}

export default CSVReader;