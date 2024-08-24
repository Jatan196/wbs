import { Department } from '../models/deptModel.js';
import { Job } from '../models/jobModel.js';
import axios from 'axios';
import * as  cheerio from 'cheerio';

const jobScraper = async (URL, deptId) => {
    try {
        const response = await axios.get(URL, { headers: { 'User-Agent': 'axios' } });
        const $ = cheerio.load(response.data);  // Load the HTML into cheerio
        console.log("Successfully fetched");

        const results = [];

        const table = $('table');  // Select the table element
        table.find('tr').each((index, row) => {
            if (index === 0) return; // Skip the header row if needed

            const cells = $(row).find('td');  // Find all <td> elements in the row
            const result = {
                title: cells.eq(0).text().trim(),
                publishDate: cells.eq(1).text().trim(),
                lastDate: cells.eq(2).text().trim(),
                downloadFile: cells.eq(3).find('a').attr('href'), // Link to the PDF file
            };

            results.push(result);
        });

        // Fetch the current jobs from the Department document
        const currJobs = await Department.findById(deptId).populate('jobs');
        console.log(currJobs);
        // Filter out jobs that are already present in the current jobs
        const newJobs = results.filter((resultJob) => {
            return !currJobs.jobs.some((currJob) => currJob.title === resultJob.title);
        });

        // Insert the new jobs and collect their IDs
        const newJobIds = await Promise.all(newJobs.map(async (job) => {
            const newJob = new Job(job);
            await newJob.save();
            return newJob._id;
        }));

        // Update the Department document with the new job IDs
        await Department.updateOne(
            { _id: deptId },
            { $push: { jobs: { $each: newJobIds } } }
        );


        // search for jobs in job doc 
        // if not found ,then make new and add in dept array, 

        // logic of adding and removing new jobs after re-srapping


        console.log("This is the data:");
        console.log(results);
    } catch (error) {
        console.error("Could not fetch the source:", error);
    }
};


const deptScraper = async (URL) => {

    try {
        const response = await axios.get(URL, { headers: { 'User-Agent': 'axios' } });
        const $ = cheerio.load(response.data);  // Load the HTML into cheerio
        console.log("Successfully fetched");

        const results = [];

        const table = $('table');  // Select the table element
        table.find('tr').each((index, row) => {
            if (index === 0) return; // Skip the header row if needed

            const cells = $(row).find('td');  // Find all <td> elements in the row
            const result = {
                name: cells.eq(2).text().trim(),
                recruitmentLink: cells.eq(4).find('a').attr('href')
            };

            results.push(result);
        });
        try {
            /*  await Promise.all(results?.map(async (dept) => {
                  if (dept.name && dept.recruitmentLink) {
                      const departmentData = {
                          name: dept.name,
                          recruitmentLink: dept.recruitmentLink,
                          jobs: []
                      };
                      console.log("-----------");
                     const id=await Department.create(departmentData);
                     console.log(id,"-----------");
                      // const newDept = new Department(departmentData);
                    //  await newDept.save(); // Save the department
                  }
              }));
              // const testDept = new Department({
              //     name: 'Test Department',
              //     recruitmentLink: 'http://example.com',
              //     jobs: []
              // });
              
              // try {
              //     await testDept.save();
              //     console.log('Test department saved successfully');
              // } catch (error) {
              //     console.error('Error saving test department:', error);
              // }
  
              // const dept=await Department.findById("66c1d41aed14c9f061e2349d");
  
              // console.log(dept);
              // console.log('All departments saved successfully');
  */
            const departmentData = {
                name: "asdfa",
                recruitmentLink: "dept.recruitmentLink",
                jobs: []
            };
            console.log("-----------");
            const id = await Department.create(departmentData);
        } catch (error) {
            console.error('Error saving departments:', error);
        }

        console.log("This is the data:");
        // console.log(results);
    } catch (error) {
        console.error("Could not fetch the source:", error);
    }
};
// https://www.ncs.gov.in/pages/govt-job-vacancies.aspx
//deptScraper("https://www.ncs.gov.in/pages/govt-job-vacancies.aspx");
//jobScraper("https://dot.gov.in/all-vacancies#");

const jobData = {
    title: "asdfa",
    publishDate: "dept.recruitmentLink",
    closeDate: "sfa"
};
console.log("-----------");
const id = await Job.create(jobData);
console.log(id);


