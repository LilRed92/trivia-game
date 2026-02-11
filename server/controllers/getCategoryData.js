

export const getCategoryData = (req, res) => {

    // Hard coded URL obtained via Open Trivia DB API Documentation
    const url = 'https://opentdb.com/api_category.php'; 

    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            const trivia_categories = data.map(({ id, name }) => ({
                id,
                name
            }));

            res.send({ trivia_categories });
        })
        .catch((err) => {
            console.err('Error fetching trivia categories', err);
            res.status(500).json({ message: 'Internal Server Error', detail: err.message });
        });
};