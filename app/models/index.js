const { QuizHasTag } = require('./QuizHasTag');
const { Question } = require('./Question');
const { Answer } = require('./Answer');
const { Level } = require('./Level');
const { Quiz } = require('./Quiz');
const { User } = require('./User');
const { Tag } = require('./Tag');

// User et Quiz : one-to-many
User.hasMany(Quiz, {
    foreignKey: 'user_id',
    as: 'quizzes',
});

// Quiz et User : belongsTo
Quiz.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'author',
});

// Quiz et Question :
Quiz.hasMany(Question, {
    foreignKey: 'quiz_id',
    as: 'questions',
});

Question.belongsTo(Quiz, {
    foreignKey: 'quiz_id',
    as: 'quiz',
});

// Question et Level
Level.hasMany(Question, {
    foreignKey: 'level_id',
    as: 'questions',
});

Question.belongsTo(Level, {
    foreignKey: 'level_id',
    as: 'level',
});

// ! ça marche pas : <The A.hasOne(B) association means that a One-To-One relationship exists between A and B, with the foreign key being defined in the target model (B).>
// Question.hasOne(Level, {
//     foreignKey: 'level_id',
//     as: 'level',
// });

// Question et Answer
// SELECT * FROM question JOIN answer ON answer.question_id = question.id

// ! Pour tester avec l'automatisation sequelize (/install), on peut commenter les trois associatinos qui suivent
Answer.belongsTo(Question, {
    foreignKey: 'question_id',
    as: 'question',
});

Question.hasMany(Answer, {
    foreignKey: 'question_id',
    as: 'answers',
});

// * La bonne réponse
Question.belongsTo(Answer, {
    foreignKey: 'answer_id',
    as: 'good_answer',
});

// // TODO tester le bidule
// // Answer.hasOne(Question, {
// //     foreignKey: 'answer_id',
// //     as: 'good_answer',
// // });

// * Quiz et Tag : many to many
Quiz.belongsToMany(Tag, {
    // * through = table de liaison
    through: QuizHasTag,
    // * clé étrangère : la méthode est une belongsTo, on trouve la clé étrangère sur le modèle source (A) : on prend le nom du modèle et on le lowercase, et on le snake_case avec id
    foreignKey: 'quiz_id',
    otherKey: 'tag_id',
    as: 'tags',
});

Tag.belongsToMany(Quiz, {
    through: QuizHasTag,
    foreignKey: 'tag_id',
    otherKey: 'quiz_id',
    as: 'quizzes',
});

module.exports = { Answer, Level, Tag, User, Question, Quiz };
