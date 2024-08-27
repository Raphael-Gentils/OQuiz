SELECT
    "Quiz"."id",
    "Quiz"."title",
    "Quiz"."description",
    "Quiz"."user_id",
    "Quiz"."created_at",
    "Quiz"."updated_at",
    "author"."id" AS "author.id",
    "author"."firstname" AS "author.firstname",
    "author"."lastname" AS "author.lastname",
    "author"."email" AS "author.email",
    "author"."password" AS "author.password",
    "author"."created_at" AS "author.created_at",
    "author"."updated_at" AS "author.updated_at"
FROM
    "quiz" AS "Quiz"
    LEFT OUTER JOIN "user" AS "author" ON "Quiz"."user_id" = "author"."id"
WHERE
    "Quiz"."id" = 1;
