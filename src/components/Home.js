import FolderIcon from "./FolderIcon";
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
          image="/images/test.png" 
          altText="Folder 1" 
          folderName="Folder1"
        //   onClick={() => handleFolderClick("Folder 1")}
        />
        <FolderIcon 
          image="/images/test.png" 
          altText="Folder 2" 
          folderName="Folder2"
        //   onClick={() => handleFolderClick("Folder 2")}
        />
        <FolderIcon 
          image="/images/test.png" 
          altText="Folder 3" 
          folderName="Folder3"
        //   onClick={() => handleFolderClick("Folder 3")}
        />
      </div>
    </div>
    )
}

export default Home;