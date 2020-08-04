import React from 'react';
import FlatfileImporter from "flatfile-csv-importer"

FlatfileImporter.setVersion(2)

const license = '1280cf65-f3a7-4b26-ae74-90288f0c5e85'

const flatfileConfig = {
    type: "flatfile test",
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

const imporder = new FlatfileImporter(license, flatfileConfig)

function CSVReader() {
    return (
        <div className="csv-reader"
    )
}