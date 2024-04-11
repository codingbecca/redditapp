const API_BASE = 'https://www.reddit.com';

export const getPosts = async () => {
    try {
        const response = await fetch(`${API_BASE}/r/craftsnark.json`);
        if (response.ok) {
            const jsonResponse = await response.json();

            return jsonResponse.data.children.map((post) => post.data);
        }
        throw new Error('Request Failed');
    } catch (error) {
        console.log(error);
    }
}

export const getPostsByFlair = async (flair) => {
    try {
        const response = await fetch(`${API_BASE}/r/craftsnark/search/.json?q=flair%3A${flair}&restrict_sr=true`);
        if (response.ok) {
            const jsonResponse = await response.json();

            return jsonResponse.data.children.map((post) => post.data);
        }
        throw new Error('Request Failed');
    } catch (error) {
        console.log(error);
    }
}

export const getPostComments = async (permalink) => {
    try {
        const response = await fetch(`${API_BASE}${permalink}.json`);
        if(response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse[1].data.children.map((comment) => comment.data);
        }
        throw new Error('Request Failed');
    } catch (error) {
        console.log(error);
    }
}