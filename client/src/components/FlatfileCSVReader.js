import React from 'react';
import FlatfileImporter from "flatfile-csv-importer"

FlatfileImporter.setVersion(2)

const license = '1280cf65-f3a7-4b26-ae74-90288f0c5e85'

const flatfileConfig = {
    type: "vsacDb-import",
    fields: [
        {
            label: "Provider Name",
            key: "providerName"
        },
        {
            label: "Program Name",
            key: "program"
        },
        {
            label: "Certification or Credential",
            key: "certification"
        },
        {
            label: "Region of Vermont",
            key: "region"
        },
        {
            label: "Mode of Instruction",
            key: "modality"
        },
        {
            label: "Cost of Program",
            key: "price"
        },
        {
            label: "Pell Grant Eligibility",
            key: "pell"
        },
        {
            label: "VT Advancement Grant Eligibility",
            key: "VTAdvancementGrant"
        },
        {
            label: "Start Date - End Date",
            key: "startEndDate"
        },
        {
            label: "Provider Website",
            key: "providerLink"
        },
        {
            label: "Contact Email",
            key: "contactEmail"
        },
        {
            label: "Record Created By",
            key: "recordCreatedBy"
        },
        {
            label: "Record Created On",
            key: "lastUpdate"
        },
        
    ]
}

const importer = new FlatfileImporter(license, flatfileConfig)

importer.setCustomer ({
     userId: "12345"
})

const launchFlatfile = () => {
    importer.requestDataFromUser().then(results => {
        importer.displayLoader();
        setTimeout( () => {
            importer.displaySuccess("Successful Upload");
            // console.log(JSON.stringify(results.validData, null, 2))
            console.log(results)
        },  1500)
    })
}

function CSVReader(props) {
    return (
        <div className="csv-reader">
            <button onClick={launchFlatfile}>
                Select CSV File
            </button>
        </div>
    )
}

export default CSVReader;