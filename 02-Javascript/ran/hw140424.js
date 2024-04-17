function fetchUserData(userId) {
    return new Promise(resolve => {
        setTimeout(() => resolve(`User data for ${userId}`), 500);
    });
}

function fetchUserPosts(userId) {
    return new Promise(resolve => {
        setTimeout(() => resolve(`Posts of user ${userId}`), 1000);
    });
}

function fetchUserComments(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error(`Failed to fetch comments for ${userId}`)), 1500);
    });
}

function all(promises) {
    return new Promise((resolve, reject) => {
        let results = [];
        let completed = 0;
        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then(result => {
                    results[index] = result;
                    completed++;
                    if (completed === promises.length) {
                        resolve(results);
                    }
                })
                .catch(error => {
                    reject(error);
                });
        });
        if (promises.length === 0) {
            resolve(results);
        }
    });
}

all([fetchUserData(1), fetchUserPosts(1), fetchUserComments(1)])
    .then(results => {
        console.log('All data:', results);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });

    function any(promises) {
        return new Promise((resolve, reject) => {
            let errors = [];
            let rejectedCount = 0;
            promises.forEach(promise => {
                Promise.resolve(promise)
                    .then(resolve)
                    .catch(error => {
                        errors.push(error);
                        rejectedCount++;
                        if (rejectedCount === promises.length) {
                            reject(errors);
                        }
                    });
            });
            if (promises.length === 0) {
                reject("No promises provided");
            }
        });
    }
    
    // Example usage with practical data
    const fetchUserById = id => new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id === 1) {
                resolve({ id: 1, name: "John Doe" });
            } else {
                reject(new Error(`User with id ${id} not found`));
            }
        }, Math.random() * 2000 + 1000); // Random delay to simulate network request
    });
    
    const fetchSettings = () => new Promise((resolve, reject) => {
        setTimeout(() => resolve({ theme: "dark" }), Math.random() * 2000 + 500);
    });
    
    const fetchErrorLogs = () => new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error("Failed to fetch logs")), Math.random() * 2000 + 500);
    });
    
    any([fetchUserById(2), fetchSettings(), fetchErrorLogs()])
        .then(result => {
            console.log("First resolved promise data:", result);
        })
        .catch(errors => {
            console.error("All promises rejected. Errors:", errors.map(e => e.message));
        });

        
        function race(promises) {
            return new Promise((resolve, reject) => {
                promises.forEach(promise => {
                    Promise.resolve(promise)
                        .then(resolve)
                        .catch(reject);
                });
                if (promises.length === 0) {
                    reject("No promises provided");
                }
            });
        }
        
        // Example usage with practical data
        const fetchUserById = id => new Promise((resolve, reject) => {
            setTimeout(() => {
                if (id === 1) {
                    resolve({ id: 1, name: "John Doe" });
                } else {
                    reject(new Error(`User with id ${id} not found`));
                }
            }, Math.random() * 2000 + 1000); // Random delay to simulate network request
        });
        
        const fetchSettings = () => new Promise((resolve, reject) => {
            setTimeout(() => resolve({ theme: "dark" }), Math.random() * 2000 + 500);
        });
        
        const fetchErrorLogs = () => new Promise((resolve, reject) => {
            setTimeout(() => reject(new Error("Failed to fetch logs")), Math.random() * 2000 + 500);
        });
        
        race([fetchUserById(2), fetchSettings(), fetchErrorLogs()])
            .then(result => {
                console.log("First settled promise data:", result);
            })
            .catch(error => {
                console.error("First settled promise rejected. Error:", error.message);
            });

            

            function promiseResolve(value) {
                return new Promise(resolve => {
                    resolve(value);
                });
            }
            
            function promiseReject(reason) {
                return new Promise((_, reject) => {
                    reject(reason);
                });
            }
            
            // Example usage of promiseResolve
            promiseResolve("Data successfully loaded").then(result => {
                console.log(result);  // Outputs: Data successfully loaded
            });
            
            // Example usage of promiseReject
            promiseReject(new Error("Failed to load data")).catch(error => {
                console.error(error);  // Outputs: Error: Failed to load data
            });
                        