import './Profile.css';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined'; import PortraitOutlinedIcon from '@mui/icons-material/PortraitOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import AuthPageFooter from '../../auth-pages/components/auth-page-footer/AuthPageFooter';
import LeftNavbar from '../components/LeftNavbar/LeftNavbar';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import ProfileImg from '../../../assets/ProfileImg.avif';
function Profile() {
  return (
    <>
      <div className="slidenav-profil">
        <LeftNavbar />
      </div>
      <div className='profile-container'>
        <div className="profile-img">
          <img src={ProfileImg} alt="profile" />
        </div>
        <div className="profile-info">
          <div className="profile-header">
            <h2 className='username'>AwniJ</h2>
            <button className='edit-btn'>Edit profile</button>
            <button className='archive-brn'>View archive</button>
            <svg aria-label="Options" className="profile-icon" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Options</title><circle cx="12" cy="12" fill="none" r="8.635" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle><path d="M14.232 3.656a1.269 1.269 0 0 1-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 0 1-.796.66m-.001 16.688a1.269 1.269 0 0 1 .796.66l.505.996h1.862l.505-.996a1.269 1.269 0 0 1 .796-.66M3.656 9.768a1.269 1.269 0 0 1-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 0 1 .66.796m16.688-.001a1.269 1.269 0 0 1 .66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 0 1-.66-.796M7.678 4.522a1.269 1.269 0 0 1-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 0 1-.096 1.03m11.8 11.799a1.269 1.269 0 0 1 1.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 0 1 .096-1.03m-14.956.001a1.269 1.269 0 0 1 .096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 0 1 1.03.096m11.799-11.8a1.269 1.269 0 0 1-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 0 1-1.03-.096" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
          </div>
          <div className="profile-stats">
            <div className="posts">
              <p>0</p>
              <h3>Posts</h3>
            </div>
            <div className="followers">
              <p>1.8M</p>
              <h3>Followers</h3>
            </div>
            <div className="following">
              <p>1254</p>
              <h3>Following</h3>
            </div>
          </div>
          <div className="profile-bio">
            <h3>Bio</h3>
            <p>Hey there! I am using Instagram</p>
          </div>
        </div>
      </div>
      <div className="highlights">
        <div className="highlight">
          <svg aria-label="Plus icon" fill="currentColor" height="44" role="img" viewBox="0 0 24 24" width="44"><title>Plus icon</title><path d="M21 11.3h-8.2V3c0-.4-.3-.8-.8-.8s-.8.4-.8.8v8.2H3c-.4 0-.8.3-.8.8s.3.8.8.8h8.2V21c0 .4.3.8.8.8s.8-.3.8-.8v-8.2H21c.4 0 .8-.3.8-.8s-.4-.7-.8-.7z"></path></svg>
          <span className="x1lliihq x1plvlek xryxfnj x1n2onr6 x193iq5w xeuugli x1fj9vlw x13faqbe x1vvkbs x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x1i0vuye x1fhwpqd x1s688f x5n08af x10wh9bi x1wdrske x8viiok x18hxmgj" dir="auto"><span className="x1lliihq x193iq5w x6ikm8r x10wlt62 xlyipyv xuxw1ft">New</span></span>
        </div>
      </div>
      <div className='parent-div'>
        <div className="profile-options">
          <button className='posts-btn'>
            <AppsOutlinedIcon className='icons' />
            <span>Posts</span>
          </button>
          <button className='saved-btn'>
            <BookmarkBorderOutlinedIcon className='icons' />
            <span>Saved</span>
          </button>
          <button className='tagged-btn'>
            <PortraitOutlinedIcon className='icons' />
            <span>Tagged</span>
          </button>
        </div>
        <div className="posts-container">
          <div className="post-share">
            <span><CameraAltOutlinedIcon /></span>
            <h1>Share Photos</h1>
            <p>When you share photos, they will appear on your profile.</p>
            <button>Share your first photo</button>
          </div>
        </div>
      </div>
      <div className="footer-progile">
        <AuthPageFooter />
      </div>
    </>
  )
}

export default Profile


