function sumData() {
    const input = document.getElementById('text_number').value
    fetch('http://localhost:3000/getData', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ number: input })
    })
        .then(res => res.json())
        .then(data => {
            const result = document.getElementById('result')
            if (data.error) {
                result.innerText = data.error;
            } else {
                result.innerText = data.result;
            }
        })
        .catch(error => {
            document.getElementById('result').innerText = error;
        })
}

const btn = document.getElementById('btn').addEventListener('click', sumData)
