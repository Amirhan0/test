import {useState} from 'react'
import axios from 'axios'
const FormMaximum = () => {
    const [dateTime, setDateTime] = useState('')
    const [author, setAuthor] = useState('')
    const [sum, setSum] = useState('')
    const [category, setCategory] = useState('Games')
    const [comment, setComment] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!dateTime || !author || !sum || !category || !comment) {
            console.log('Заполните все поля!');
            return;
        }
        try {
            const response = await axios.post('http://localhost:5000/api/transactions', {
                dateTime,
                author,
                sum,
                category,
                comment
            })
            console.log('Успешная отправка')
        } catch (error) {
            console.log('Ошибка при отправке post-запроса', error)
        }
    }
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
                <h2 className="text-2xl font-bold mb-6 text-center">Test</h2>
                
                <label className="block mb-4">
                    <span className="text-gray-700">Дата:</span>
                    <input 
                        type="date" 
                        value={dateTime}
                        onChange={(e) => setDateTime(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-green-300"
                    />
                </label>
                
                <label className="block mb-4">
                    <span className="text-gray-700">Автор:</span>
                    <input 
                        type="text" 
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-green-300" 
                        placeholder="Введите имя автора"
                    />
                </label>
                
                <label className="block mb-4">
                    <span className="text-gray-700">Сумма:</span>
                    <input 
                        type="number" 
                        value={sum}
                        onChange={(e) => setSum(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-green-300" 
                        placeholder="Введите сумму"
                    />
                </label>
                
                <label className="block mb-4">
                    <span className="text-gray-700">Категория:</span>
                    <select value={category} onChange={(e) => setCategory(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-green-300">
                        <option value="Games">Games</option>
                        <option value="Food">Food</option>
                        <option value="Cars">Cars</option>
                    </select>
                </label>
                
                <label className="block mb-4">
                    <span className="text-gray-700">Комментарий:</span>
                    <input 
                        type="text" 
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-green-300" 
                        placeholder="Введите комментарий"
                    />
                </label>

                <button onClick={handleSubmit} className="w-full bg-green-500 text-white font-semibold py-2 rounded-md hover:bg-green-600 transition duration-200">
                    Добавить
                </button>
            </form>
        </div>
    );
};

export default FormMaximum;
