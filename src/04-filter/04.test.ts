test('should take old men older than 90', () => {
    const ages = [18,22,20,1,100,90,14];

    const oldAges = ages.filter(age => age > 90)

    expect(oldAges.length).toBe(1)
})

test('should take courses cheaper than 160', () => {
    const courses = [
        {title: 'css', price: 110},
        {title: 'js', price: 200},
        {title: 'react', price: 150}
    ]

    const cheapCourses = courses.filter(course => course.price < 160)

    expect(cheapCourses.length).toBe(2)
})

test('get only completed tasks', () => {
    const tasks = [
        {id: 1, title: 'bread', isDone: true},
        {id: 2, title: 'milk', isDone: true},
        {id: 3, title: 'soy sauce', isDone: false},
        {id: 4, title: 'honey', isDone: false}
    ]

    const completedTasks = tasks.filter(task => task.isDone);

    expect(completedTasks.length).toBe(2);
    expect(completedTasks[0].id).toBe(1);
    expect(completedTasks[1].id).toBe(2);
})

test('get only incompleted tasks', () => {
    const tasks = [
        {id: 1, title: 'bread', isDone: true},
        {id: 2, title: 'milk', isDone: true},
        {id: 3, title: 'soy sauce', isDone: false},
        {id: 4, title: 'honey', isDone: false}
    ]

    const completedTasks = tasks.filter(task => !task.isDone);

    expect(completedTasks.length).toBe(2);
    expect(completedTasks[0].id).toBe(3);
    expect(completedTasks[1].id).toBe(4);
})