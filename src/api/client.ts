import { GraphQLClient } from 'graphql-request'

const client = new GraphQLClient(
  'https://api-eu-central-1.graphcms.com/v2/ckw6eisvt16ms01xxfg4234st/master',
  {
    headers: {
      Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2Mzc1NzgyMTYsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEuZ3JhcGhjbXMuY29tL3YyL2NrdzZlaXN2dDE2bXMwMXh4Zmc0MjM0c3QvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiNjY1Y2JiOTMtYzVlMS00Zjg0LWI2MzMtNjE5ODQ0OGQwZTU0IiwianRpIjoiY2t3YWpzZWExMmF1ejAxejJlYXJhOTA3YSJ9.Gg7ZSlXaFXXWJjeQkiEyilQqygmErqH2eN7xgW_3wDapTVI5pMyL1Usp3ahA2Xo_7lKm8LKXN91v-djHxIhOFRBGQnFJEOJyVUlWx78YBX2aomhg_8XeB7AztaLJDu45QvGq5yMbAxLF592UyHeQkHaEnnvts7RyH7KUJpvcypOaDSWCoj6OeR3tXk6alpLEMS1-mqm68fbAZNb49_SY-TUIri08mrs5asH5idudGJtnAv9dW-fsw7EuowjbHAGIrMMGsQlhhnU__CCvjBjgknr898WhXde9zVqvvjaB2SkAAOQa1nYQs7TlvJtjuZBxPf1WBkvq4Cmpo0WJmlGRCBoCrIJ6OA6iw355wZw9GnVigazjRM85-NdzVB8oKgSK8tGOwUBBePdBl4LY-N0F6k1iQCCztzJzOxgWNCneMkf8woHE5UGg531LFcxiJWn7Xy90GVEEoYHyUo6H1IKEAK4Aojj4-lacg26UvEba3foIY1Vn4NevgbmqchoDWz3z4jUTMQJFj7Qw3Gkwy-7Fuu1yqruEb1nI19PnxKDqmge2p8Ymb1oOnXu0jx0o55bYI7r0S-AoS49jyL6Eyz0C1njSA5YW77IKz7Tqh5cuLlr6ynJV8XXOry15q2CaE8ZG-kTr_epz8LecbhnCngDuUOU4E9V0vxErtnOlxpAFz7Q'
    }
  }
)

export default client
