
// TODO: 1
const expenses = [
    {description: "Groceries", amount: 50, category: "Food"},
    {description: "Electricity Bill", amount: 100, category: "Utilities"},
    {description: "Dinner", amount: 30, category: "Food"},
    {description: "Internet Bill", amount: 50, category: "Utilities"},
]

const expenseReport = expenses.reduce((report, expense) => {
    report[expense.category] += expense.amount
    return report
}, { Food: 0, Utilities: 0 })

const expenseReport2 = expenses.reduce((report, expense) => {
    report[expense.category] = (report[expense.category] || 0) + expense.amount
    return report
},{})


// TODO: 2
const tasks = [
    {description: "Write report", completed: false, priority: 2},
    {description: "Send email", completed: true, priority: 3},
    {description: "Prepare Presentation", completed: false, priority: 1},
]

const pendingSortedTasks = tasks
    .filter((task) => !task.completed)
    .sort((a, b) => a.priority - b.priority )


const movieRatings = [
    { title: "Movie A", ratings: [4, 5, 3] },
    { title: "Movie B", ratings: [5, 5, 4] },
    { title: "Movie C", ratings: [3, 4, 2] },
];

const averageMovieRating = movieRatings.map((movie) => {
    const totalRating = movie.ratings.reduce((sum, rating) => sum + rating, 0)
    const averageRating = totalRating / movie.ratings.length
    return {
        title: movie.title,
        ratings: averageRating.toFixed(1)
    }
})




