import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// Component for loading all information about a particular program in the database selected from the Home table

function ProgramPage() {
  let { _id } = useParams();
  const [data, setData] = useState({ program: [] });

  useEffect(() => {                                 // React hook to mimic state for a functional component
    const fetchData = async () => {
      const result = await axios.get(`/user/program/${_id}`);

      setData(result.data[0]);
    };

    fetchData();
  }, [_id]);

  let dateConvert = (dateString) => {                // Converting ISO date to MM/DD/YYYY format
    let convertedDate = new Date(dateString);
    return convertedDate.toLocaleString().split(",", 1);
  };

  // Template display for rendering individual program information
  return (
     <div>                                           
      {data ? (
        <div className="main-container">
          <div className="content" id='program-content'>
            <div className='title'>
            <div className='line'></div>
            <div className="program-header">
              <h1>{data.program}</h1>
            </div>
            <div className='line'></div>
            </div>
            <div id="program-table">
              <div className="left-side">
                <h3>Provider:</h3>
              </div>
              <div className="right-side">
                <h3>{data.providerName}</h3>
              </div>
              <div className="left-side">
                <h3>Dates:</h3>
              </div>
              <div className="right-side">
                <h3>
                  {data.startDate} - {data.endDate}
                </h3>
              </div>
              <div className="left-side">
                <h3>Cost:</h3>
              </div>
              <div className="right-side">
                <h3>{data.price}</h3>
              </div>
              {data.certification !== "" ? (
                <>  
                <div className="left-side"><h3>Certification:</h3></div>
                <div className="right-side"><h3>({data.certification})</h3></div>
                </>
              ) : (
                 <> 
                <div className="left-side"><h3>Certification:</h3></div>
                <div className="right-side"><h3>None Listed</h3></div>
                </>
              )}
              <div className="left-side">
                <h3>Pell Grant Eligible?:</h3>
              </div>
              <div className="right-side">
                <h3>{data.pell}</h3>
              </div>
              <div className="left-side">
                <h3>VT Grant Eligible?:</h3>
              </div>
              <div className="right-side">
                <h3> {data.VTGrant}</h3>
              </div>
              <div className="left-side">
                <h3>Mode of Instruction:</h3>
              </div>
              <div className="right-side">
                <h3> {data.modality}</h3>
              </div>
              <div className="left-side">
                <h3>Region/County:</h3>
              </div>
              <div className="right-side">
                <h3> {data.region}</h3>
              </div>
              <div className="left-side">
                <h3>State:</h3>
              </div>
              <div className="right-side">
                <h3> {data.state}</h3>
              </div>
              <div className="left-side">
                <h3>Contact Email:</h3>
              </div>
              <div className="right-side">
                <h3> {data.contactEmail}</h3>
              </div>
              <div className="left-side">
                <h3>Website:</h3>
              </div>
              <div className="right-side">
                <h3>
                  <a href={data.providerLink} target="_blank">{data.providerLink}</a>
                </h3>
              </div>
              <div className="left-side">
                <h3>Last Updated:</h3>
              </div>
              <div className="right-side">
                <h3>{dateConvert(data.lastUpdate)}</h3>
              </div>
            </div>
            <button className='button'><a href='/'>Back to home</a></button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default ProgramPage;
