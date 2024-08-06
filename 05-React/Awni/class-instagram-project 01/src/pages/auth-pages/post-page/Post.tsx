
import { memo, useState, useEffect } from 'react';
import './Post.css';

/**
 {"gender":"male","name":{"title":"Mr","first":"Alvin","last":"Utgård"},"location":{"street":{"number":6664,"name":"Edvard Munchs plass"},"city":"Ibestad",
 "state":"Sogn og Fjordane","country":"Norway","postcode":"1851","coordinates":{"latitude":"44.0288","longitude":"-47.0300"},
 "timezone":{"offset":"0:00","description":"Western Europe Time, London, Lisbon, Casablanca"}},"email":"alvin.utgard@example.com",
 "login":{"uuid":"0e7a25b3-dd1b-4ed1-9924-b56b7307dd21","username":"blueelephant747","password":"maggie","salt":"12eS41eY",
 "md5":"bed355745ff88fcf3e1d3304c9330ccb","sha1":"74351ca9f585fad24ed6f61863e2f83b5d01225a","sha256":"2aa00e56fb0d618703ad14ad45fbe38f5bf637d79afa13b75617704f45016fbf"},
 "dob":{"date":"1962-08-21T06:33:47.038Z","age":61},"registered":{"date":"2009-12-02T23:54:14.304Z","age":14},"phone":"52048811","cell":"48441743",
 "id":{"name":"FN","value":"21086209788"},"picture":{"large":"https://randomuser.me/api/portraits/men/69.jpg",
 "medium":"https://randomuser.me/api/portraits/med/men/69.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/69.jpg"},"nat":"NO"}
 */
type Posts = {
    name: {
        title: string;
        first: string;
        last: string;
    };
    email: string;
    picture: {
        thumbnail: string;
    };
    gender: string;
    location: {
        street: {
            number: number;
            name: string;
        };
        city: string;
        state: string;
        country: string;
        postcode: string;
        coordinates: {
            latitude: string;
            longitude: string;
        };
        timezone: {
            offset: string;
            description: string;
        };
    };
    login: {
        uuid: string;
        username: string;
        password: string;
        salt: string;
        md5: string;
        sha1: string;
        sha256: string;
    };
    dob: {
        date: string;
        age: number;
    };
    registered: {
        date: string;
        age: number;
    };
    phone: string;
    cell: string;
    id: {
        name: string;
        value: string;
    };
    nat: string;

}

function Post() {


    const [posts, setPosts] = useState<Posts[]>([]); // posts is an array of objects of type Posts 
    useEffect(() => { // useEffect is used to fetch the data from the api when the component is mounted  
        fetchPosts(); // fetchPosts function is called when the component is mounted 
    }, []) // empty array is passed as the second argument to useEffect so that the function is called only once when the component is mounted 

    const fetchPosts = async () => {
        try {
            const res = await fetch('https://randomuser.me/api/?results=50'); // fetching the data from the api  
            const data = await res.json(); // converting the response to json format  
            setPosts(data.results); // setting the posts state with the data fetched from the api 
        } catch (error) {
            console.error('Error fetching posts:', error); // logging the error to the console if there is an error while fetching the data 
        }
    };


    useEffect(() => {
        const interval = setInterval(fetchPosts, 30000); // fetching the data from the api every 30 seconds 
        return () => clearInterval(interval) // clearing the interval when the component is unmounted 
    }, [])

    return (
        <div>
            <h1 className='posts-title'>Posts</h1>
            <button className='posts-btn' onClick={fetchPosts}>Refresh</button>
            <div className="posts">
                {posts.map((post, index) => (
                    <div key={index} className="post-container">
                        <div className="header-titles">
                            <h2 className='post-h2'><span>ID: </span>{post.id.name} </h2>
                            <h3 className='post-h3'><span>Name: </span>{post.name.first} {post.name.last}</h3>
                            <p className='post-email'><span>Email: </span>{post.email}</p>
                            <p className='post-gender'><span>Gender: </span>{post.gender}</p>
                        </div>
                        <div className="post-img">
                            <img src={post.picture.thumbnail} alt="profile" />
                        </div>
                        <div className='location-box'>
                            <div className='location'>
                                <span>Country:</span> {post.location.country}
                                <span>City: </span> {post.location.city}
                                <span>Postcode: </span> {post.location.postcode}
                                <span>Latitude: </span> {post.location.coordinates.latitude}
                                <span>Longitude: </span> {post.location.coordinates.longitude}
                            </div>
                            <div className="street">
                                <span>Street name: </span> {post.location.street.name}
                                <span>Street number: </span> {post.location.street.number}
                            </div>
                            <div className="timezone">
                                <span>Timezone description: </span> {post.location.timezone.description}
                                <span>Timezone offset: </span> {post.location.timezone.offset}
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default memo(Post)



