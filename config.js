module.exports = function(){
    var env = process.env.NODE_ENV || 'development';
    switch(env){
        case 'development':
            return {url: 'http://dev'};

        case 'production':
            return {url: 'http://prod'};
    }
};
