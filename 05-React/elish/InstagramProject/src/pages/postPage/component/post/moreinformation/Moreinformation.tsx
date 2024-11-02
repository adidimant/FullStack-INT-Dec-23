import { memo, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import './Moreinformation.css';

type more = {
    openMore: boolean;
    onClose: () => void;
};

function Moreinformation({openMore, onClose}: more): ReactNode {

    if(!openMore) return null;

    return(
        <div className="moreinformation-container">
            <div className='window'>
                    <div className="buttoms">
                        <button className="btn1">Report</button>
                        <button>Unfollow</button>
                        <button>Add to favorites</button>
                        <button><Link to={'/GoToPost/'}>Go to post</Link></button>
                        <button>Share to...</button>
                        <button>Copy link</button>
                        <button>Embed</button>
                        <button>About this account</button>
                        <button className="btn2" onClick={onClose}>Cancel</button>
                    </div>
            </div>
           
        </div>
    );
}

export default memo(Moreinformation);
