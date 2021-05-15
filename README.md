# Empyrean Cake Api

Install the Express framework by entering the following:
npm install express@4.17.1

REST endpoints for Empyrean Cake platform based on NodeJS & MongoDB.

## Open Endpoints

Open endpoints require no Authentication.

- Login : `POST /api/login/`

## Cake related

Endpoints for viewing and manipulating the Cake API

- Get all cakes : `GET /api/cakes/`
- Create cake: `POST /api/cakes/`
- Show details for one cake : `GET /api/cakes/:cakeid/`
- Update cake details: `PUT /api/cakes/:cakeid/`
- Delete cake from catalog: `DELETE /api/cakes/:cakeid/`

## Comments related

Endpoints for viewing and manipulating the comments API

- Get all comments : `GET /api/comments/`
- Create comments: `POST /api/comments/`
- Show details for one comments : `GET /api/comments/:commentsid/`
- Update comments details: `PUT /api/comments/:commentsid/`
- Delete comments from catalog: `DELETE /api/comments/:commentsid/`

## Customer Feedback related

Endpoints for viewing and manipulating the feedback API

- Get all feedback : `GET /api/feedback/`
- Create feedback: `POST /api/feedback/`
- Show details for one feedback : `GET /api/feedback/:feedbackid/`
- Update feedback details: `PUT /api/features/:feedbackid/`
- Delete feedback from catalog: `DELETE /api/cakes/:feedbackid/`

## Cake Feature/Spotlight

Endpoints for viewing and manipulating the features API

- Get all features : `GET /api/features/`
- Create features: `POST /api/features/`
- Show details for one features : `GET /api/features/:featureid/`
- Update features details: `PUT /api/features/:featureid/`
- Delete features from catalog: `DELETE /api/features/:featureid/`

## Empyrean Cake About Us Endpoint

Endpoints for viewing and manipulating the about us API

- Get all about us content : `GET /api/about/`
- Create about content: `POST /api/about/`
- Show about us details by id : `GET /api/about/:aboutid/`
- Update about us details: `PUT /api/about/:aboutid/`
- Delete about us from catalog: `DELETE /api/about/:aboutid/`
