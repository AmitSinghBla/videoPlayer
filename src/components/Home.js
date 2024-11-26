import FolderIcon from "./FolderIcon";
import testImage from '../images/test.png'
import '../styles/Home.css'


function Home() {
    const handleFolderClick = (folderName) => {
        console.log(`Folder clicked: ${folderName}`);
        // Here you can implement navigation or show content for each folder
      };
    return(
        <div className="App">
        <div className="folder-container">
        <FolderIcon 
          image={testImage} 
          altText="Folder 1" 
          folderName="Folder 1"
        //   onClick={() => handleFolderClick("Folder 1")}
        />
        <FolderIcon 
          image={testImage} 
          altText="Folder 2" 
          folderName="Folder 2"
        //   onClick={() => handleFolderClick("Folder 2")}
        />
        <FolderIcon 
          image={testImage} 
          altText="Folder 3" 
          folderName="Folder 3"
        //   onClick={() => handleFolderClick("Folder 3")}
        />
      </div>
    </div>
    )
}

export default Home;