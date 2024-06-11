import React from 'react'
import { getFiles } from '../services/fileService.js';

function searchResult() {
    const [files, setFiles] = useState([]);

    useEffect(() => {
      fetchFiles();
    }, []);

    const fetchFiles = async () => {
        try {
          const response = await getFiles();
          setFiles(response.data);
        } catch (error) {
          console.error('Error fetching files:', error);
        }
      };


    return (
        <div>
      <h2>Search Results</h2>
      <ul>
        {files.map(file => (
          <li key={file._id}>{file.name}</li>
        ))}
      </ul>
    </div>  
    )
}

export default searchResult