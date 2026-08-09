# ABTalks 60-Day Coding Challenge - Original Problem Prompt

## The Situation
ABTalks runs a 60-day coding challenge for Indian college students.

Students pick a track, build something every day, and maintain a public learning streak by submitting:
- A GitHub commit
- A LinkedIn post

This daily proof of work helps them build consistency and become visible to recruiters.

Most students use the platform on their phones, late at night after college.

The product works.
It has never been designed.

---

## Ship at Minimum
Design and build the following three screens.

### 1. Landing Page (`/`)
The first experience for a student who has never heard of ABTalks.
Show enough trust, clarity, and motivation that they're willing to commit to a 60-day challenge.

### 2. Student Dashboard (`/dashboard`)
The home screen after logging in.
Include essentials such as:
- Current streak
- Today's task
- Progress through the challenge
- Overall completion
- Student standing or achievements

### 3. Challenge Day (`/day/12`)
The complete experience of a single challenge day.
A student should be able to:
- Read the day's task
- Understand what needs to be built
- Submit proof of work:
  - GitHub repository/commit
  - LinkedIn post
  - Submission

---

## Route Map Requirement
Provide the three routes below, one per line, in this exact order:
```text
/
/dashboard
/day/12
```
Submissions are evaluated at **390px width (mobile viewport)**.

---

## Evaluation Criteria
Your redesign should:
- Be designed mobile-first (390px), with desktop as a secondary consideration.
- Be understandable to a student who has never heard of ABTalks.
- Handle real-world edge cases such as:
  - First day with no streak
  - A missed day
  - An empty profile
- Introduce at least one thoughtful idea that improves the student experience.

---

## Out of Scope
You do not need to build:
- Authentication
- Real user accounts
- A production database
- Recruiter dashboard
- Admin panel
- Matching ABTalks' current tech stack
