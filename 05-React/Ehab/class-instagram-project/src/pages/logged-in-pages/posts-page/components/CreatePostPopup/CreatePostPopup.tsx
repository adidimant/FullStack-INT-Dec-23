import { memo, useCallback, useState } from "react";
import EmojiPicker from "emoji-picker-react";
import Button from "../../../../../components/button/Button";
import profilePic from "../../../../../assets/profile.jpg";
import "./CreatePostPopup.css";
import axios from "axios";
import { useRefreshContext } from "../../../../../contexts/refresh-context";

const maxChars = 2200;

type CreatePostPopupProps = {
  show: boolean;
  onClose: () => void;
}

function CreatePostPopup( { show, onClose }: CreatePostPopupProps ) {
  const [text, setText] = useState("");
  const [location, setLocation] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);
  const { value, setValue } = useRefreshContext();
  
  const handleDescriptionChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  }, []);

  const handleLocationChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  }, []);

  const handleEmojiClick = (emojiData: { emoji: string }) => {
    setText((prevText) => prevText + emojiData.emoji);
    setShowEmojiPicker(false); 
  };

  const handleSharePost = async () => {
    if (text.trim().length === 0) {
      alert("Post content cannot be empty.");
      return;
    }

    setIsLoading(true);

    const postData = {
      description: text,
      location,
      userId: "Ofer134",
    };

    try {
      const result = await axios.put('http://localhost:3000/api/posts/create', postData);
      
      if (result.status == 201) {
        alert("Post uploaded successfully!");
        setText(""); 
        //TODO - refresh posts to present the latest posts
        setValue(true);
        onClose();
      } else {
        alert("Failed to upload the post.");
      }
    } catch (error) {
      console.error("Error uploading post:", error);
      alert("An error occurred while uploading the post.");
    } finally {
      setIsLoading(false);
    }
  };
    
    if (!show) {
        return <></>
    } 
    return (
    <div className="popup-overlay">
      <form>
      <div className="popup-window">
      <div className="headerCreateContainer">
        <div className="closeOrSave" onClick={onClose}>X</div>
				<div>Create new post</div>
        <div className="closeOrSave" itemType="submit" onClick={handleSharePost}>Share</div>
			</div>
      <div className="CreateContainer">
          <div className="UploadingPicture">
            <div>
              <svg aria-label="Icon to represent media such as images or videos" className="" fill="currentColor" height="77" role="img" viewBox="0 0 97.6 77.3" width="96"><title>Icon to represent media such as images or videos</title><path d="M16.3 24h.3c2.8-.2 4.9-2.6 4.8-5.4-.2-2.8-2.6-4.9-5.4-4.8s-4.9 2.6-4.8 5.4c.1 2.7 2.4 4.8 5.1 4.8zm-2.4-7.2c.5-.6 1.3-1 2.1-1h.2c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-.8.3-1.5.8-2.1z" fill="currentColor"></path><path d="M84.7 18.4 58 16.9l-.2-3c-.3-5.7-5.2-10.1-11-9.8L12.9 6c-5.7.3-10.1 5.3-9.8 11L5 51v.8c.7 5.2 5.1 9.1 10.3 9.1h.6l21.7-1.2v.6c-.3 5.7 4 10.7 9.8 11l34 2h.6c5.5 0 10.1-4.3 10.4-9.8l2-34c.4-5.8-4-10.7-9.7-11.1zM7.2 10.8C8.7 9.1 10.8 8.1 13 8l34-1.9c4.6-.3 8.6 3.3 8.9 7.9l.2 2.8-5.3-.3c-5.7-.3-10.7 4-11 9.8l-.6 9.5-9.5 10.7c-.2.3-.6.4-1 .5-.4 0-.7-.1-1-.4l-7.8-7c-1.4-1.3-3.5-1.1-4.8.3L7 49 5.2 17c-.2-2.3.6-4.5 2-6.2zm8.7 48c-4.3.2-8.1-2.8-8.8-7.1l9.4-10.5c.2-.3.6-.4 1-.5.4 0 .7.1 1 .4l7.8 7c.7.6 1.6.9 2.5.9.9 0 1.7-.5 2.3-1.1l7.8-8.8-1.1 18.6-21.9 1.1zm76.5-29.5-2 34c-.3 4.6-4.3 8.2-8.9 7.9l-34-2c-4.6-.3-8.2-4.3-7.9-8.9l2-34c.3-4.4 3.9-7.9 8.4-7.9h.5l34 2c4.7.3 8.2 4.3 7.9 8.9z" fill="currentColor"></path><path d="M78.2 41.6 61.3 30.5c-2.1-1.4-4.9-.8-6.2 1.3-.4.7-.7 1.4-.7 2.2l-1.2 20.1c-.1 2.5 1.7 4.6 4.2 4.8h.3c.7 0 1.4-.2 2-.5l18-9c2.2-1.1 3.1-3.8 2-6-.4-.7-.9-1.3-1.5-1.8zm-1.4 6-18 9c-.4.2-.8.3-1.3.3-.4 0-.9-.2-1.2-.4-.7-.5-1.2-1.3-1.1-2.2l1.2-20.1c.1-.9.6-1.7 1.4-2.1.8-.4 1.7-.3 2.5.1L77 43.3c1.2.8 1.5 2.3.7 3.4-.2.4-.5.7-.9.9z" fill="currentColor"></path></svg>
              <title>Icon to represent media such as images or videos</title>
              <path d="M16.3 24h.3c2.8-.2 4.9-2.6 4.8-5.4-.2-2.8-2.6-4.9-5.4-4.8s-4.9 2.6-4.8 5.4c.1 2.7 2.4 4.8 5.1 4.8zm-2.4-7.2c.5-.6 1.3-1 2.1-1h.2c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-.8.3-1.5.8-2.1z" fill="currentColor"></path>
              <path d="M84.7 18.4 58 16.9l-.2-3c-.3-5.7-5.2-10.1-11-9.8L12.9 6c-5.7.3-10.1 5.3-9.8 11L5 51v.8c.7 5.2 5.1 9.1 10.3 9.1h.6l21.7-1.2v.6c-.3 5.7 4 10.7 9.8 11l34 2h.6c5.5 0 10.1-4.3 10.4-9.8l2-34c.4-5.8-4-10.7-9.7-11.1zM7.2 10.8C8.7 9.1 10.8 8.1 13 8l34-1.9c4.6-.3 8.6 3.3 8.9 7.9l.2 2.8-5.3-.3c-5.7-.3-10.7 4-11 9.8l-.6 9.5-9.5 10.7c-.2.3-.6.4-1 .5-.4 0-.7-.1-1-.4l-7.8-7c-1.4-1.3-3.5-1.1-4.8.3L7 49 5.2 17c-.2-2.3.6-4.5 2-6.2zm8.7 48c-4.3.2-8.1-2.8-8.8-7.1l9.4-10.5c.2-.3.6-.4 1-.5.4 0 .7.1 1 .4l7.8 7c.7.6 1.6.9 2.5.9.9 0 1.7-.5 2.3-1.1l7.8-8.8-1.1 18.6-21.9 1.1zm76.5-29.5-2 34c-.3 4.6-4.3 8.2-8.9 7.9l-34-2c-4.6-.3-8.2-4.3-7.9-8.9l2-34c.3-4.4 3.9-7.9 8.4-7.9h.5l34 2c4.7.3 8.2 4.3 7.9 8.9z" fill="currentColor"></path>
              <path d="M78.2 41.6 61.3 30.5c-2.1-1.4-4.9-.8-6.2 1.3-.4.7-.7 1.4-.7 2.2l-1.2 20.1c-.1 2.5 1.7 4.6 4.2 4.8h.3c.7 0 1.4-.2 2-.5l18-9c2.2-1.1 3.1-3.8 2-6-.4-.7-.9-1.3-1.5-1.8zm-1.4 6-18 9c-.4.2-.8.3-1.3.3-.4 0-.9-.2-1.2-.4-.7-.5-1.2-1.3-1.1-2.2l1.2-20.1c.1-.9.6-1.7 1.4-2.1.8-.4 1.7-.3 2.5.1L77 43.3c1.2.8 1.5 2.3.7 3.4-.2.4-.5.7-.9.9z" fill="currentColor"></path>
            </div>
            <div>Drag photos and videos here</div>
            <div><Button text="SelectFromComputer" name="Select From Computer" onClick={() => { /* implement login here */}}/></div>
          </div>
          <div className="ContentDetails">
              <div className="profil">
                <img src={profilePic} alt="profilePic" />
                <div className="userName">Ofer134</div></div>
                  <label>Description:</label>
                  <textarea className="textContent"
                  rows={4} 
                  value={text}
                  onChange={handleDescriptionChange}
                  maxLength={maxChars}></textarea>
                <div className="imojiAndMaxChars">
                  <div className="emoji"><button onClick={() => setShowEmojiPicker((prev) => !prev)}>
                  <svg aria-label="Emoji" fill="currentColor" height="20" role="img" viewBox="0 0 24 24" width="20"><title>Emoji</title><path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path></svg>
                  </button>
                  {showEmojiPicker && (
                <div className="emojiWindow">
                    <EmojiPicker onEmojiClick={handleEmojiClick} />
                </div>
            )}</div>
                <div className="maxChars">
                  {text.length}/{maxChars}
                </div>
                </div>
            <label>Location:</label>
            <input type="text" value={location} onChange={handleLocationChange} name="post-location" id="post-location" />
          </div>
        
      </div>
            
      </div>
      </form>
    </div>
    )
}

export default memo(CreatePostPopup)
