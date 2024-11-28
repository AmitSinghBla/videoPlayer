import FolderIcon from "./FolderIcon";
import '../styles/Home.css'

function Home() {
    return(
        <div className="App">
        <div className="folder-container">
        <FolderIcon 
          image="/images/homepage.jpeg" 
          altText="Folder 1" 
          folderName="Folder1"
        />
        <FolderIcon 
          image="/images/homepage.jpeg" 
          altText="Folder 2" 
          folderName="Folder2"
        />
        <FolderIcon 
          image="/images/homepage.jpeg" 
          altText="Folder 3" 
          folderName="Folder3"
        />
      </div>
    </div>
    )
}

export default Home;