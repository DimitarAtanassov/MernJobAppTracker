// apiService.js
import axios from 'axios';
const API_URL = "https://crud-api-c680d4c27735.herokuapp.com"

export const loginService = async( username, password) => {
    try 
    {
        
        const response = await axios.post( `${API_URL}/api/users/login`, {username,password});
        
        return response.data
    
    }
    
    catch(error) 
    {
        if(error.response.status === 404) 
        {
            // Invalid username/user not found
            throw new Error('Username is invalid or does not exist');
        }

        else if(error.response.status === 401)
        {
            // Invalid password
            throw new Error('Incorrect password');
        }

        else
        {
            throw new Error('An error occured');
        }

        
    };
}

export const signUpService = async (username, email, password) => {
    try 
    {
        const response = await axios.post(`${API_URL}/api/users`, { username, email, password });
        
        return response.data;
    } 
    
    catch (error) 
    {
        if (error.response && error.response.status === 400) {
            
            const errorMessage = error.response.data.message;
            
            if (errorMessage === "Username already exists") 
            {
                throw new Error("Username already exists");
            
            } 
            
            else if (errorMessage === "Email already exists") 
            {
                throw new Error("Email already exists");
            } 
            
            else 
            {
                throw new Error(errorMessage);
            }
        }

        else if (error.response && error.response.status === 406) 
        {
            const errorMessage = error.response.data.message;
            
            throw new Error(errorMessage);
        } 
        
        else 
        {
            throw new Error("An error occurred while signing up");
        }
    }
};


export const deleteJobApplication = async ( jobId ) => {
    try 
    {
        const token = localStorage.getItem('token');
        
        const response = await axios.delete(`${API_URL}/api/jobapps/${jobId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          return response.data
    }
    catch (error)
    {
        // Optional Chaining
        /* Optional chaining allows you to access properties of an object without worrying
            about whether the object or any of its nested properties are null or undefined.
        */
        throw new Error(error.response?.data?.message || 'An error occurred while deleting the job application.');
    }
}


export const updateJobApplicationStatus = async ( jobId, newStatus ) => 
{
    try
    {
        const token = localStorage.getItem('token');
        
        const response = await axios.put(
            `${API_URL}/api/jobapps/${jobId}/status`,
            { status: newStatus },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          return response.data
    }

    catch(error)
    {
        throw new Error(error.response?.data?.message);
    }
}

export const getJobApplications = async() => {
    try
    {

        const token = localStorage.getItem('token');
        const response = await axios.get(`${API_URL}/api/jobapps`, {
            headers: {
              'Authorization': `Bearer ${token}` // Send the JWT token in the request headers
            }
          });

        return response;
    }
    catch (error)
    {
        throw new Error(error.response?.data?.message);
    }
}

export const updateSkillsService = async (skill,userID) => {
    try {
      const token = localStorage.getItem('token');
      const skillsArray = Array.isArray(skill) ? skill : [skill];
      const response = await axios.put(
        `${API_URL}/api/users/${userID}/skills`, // Include the userID in the endpoint URL
        { skills: skillsArray },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'An error occurred while updating skills.');
    }
  };


export const getUserSkillsService = async (userID) => {
    try {
      const token = localStorage.getItem('token');
  
      const response = await axios.get(
        `${API_URL}/api/users/${userID}/skills`, // Include the userID in the URL
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      return response.data.skills; // Assuming the response contains a 'skills' property
    } catch (error) {
      throw new Error(error.response?.data?.message || 'An error occurred while fetching user skills.');
    }
};



export const updateProfilePictureService = async (imageUrl, userId) => {
  try {
      const token = localStorage.getItem('token');
      const response = await axios.put(
          `${API_URL}/api/users/${userId}/profile-picture`,
          { imageUrl },
          {
              headers: {
                  Authorization: `Bearer ${token}`,
              },
          }
      );
      return response.data;
  } catch (error) {
      throw new Error(error.response?.data?.message || 'An error occurred while updating the profile picture.');
  }
};

// Define getUserByIdService function to fetch user by ID
export const getUserByIdService = async (userId) => {
  try {
      // Make GET request to fetch user by ID
      const token = localStorage.getItem('token'); // Assuming you have stored the JWT token in localStorage
      const response = await axios.get(`${API_URL}/api/users/${userId}`, {
          headers: {
              Authorization: `Bearer ${token}`,
          },
      });

      // Return user data from the response
      return response.data;
  } catch (error) {
      // Handle errors
      throw new Error(error.response?.data?.message || 'An error occurred while fetching user data.');
  }
};


export const addUserLinkService = async (source, link, userId) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.post(`${API_URL}/api/users/${userId}/links`, {
      source: source,
      link: link
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'An error occurred while adding user link.');
  }
};


export const getUserLinksService = async (userId) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(
      `${API_URL}/api/users/${userId}/links`, // Include the userID in the URL
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data.socialMediaLinks; // Assuming the response contains a 'socialMediaLinks' property
  } catch (error) {
    throw new Error(error.response?.data?.message || 'An error occurred while fetching user social media links.');
  }
};