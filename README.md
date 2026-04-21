# Oxlade Business School Platform

This is the Next.js web application for Oxlade Business School. The application features dynamic course rendering, smart filtering, and mobile-responsive marketing layouts.

## Developer Handover: Course Data Architecture

This project currently operates on a **hybrid static-fallback architecture**. Course data is stored internally within the codebase but is engineered to smoothly transition to an external Headless CMS or API in the future without breaking the frontend.

### 1. Where do Courses Live Right Now? (Static Fallback)
Currently, all courses are securely hosted locally within the codebase. The application actively pulls data from the following local structure:
- **Categories definitions**: `src/data/course-catalog.json`
- **Active course checklist**: `src/data/courses-manifest.json`
- **Individual course data**: `src/data/courses/[course-id].json`

**To add a new course instantly today:**
1. Create a `[new-course-id].json` file inside `src/data/courses/` using the exact same JSON schema as the others.
2. Add your new `new-course-id` string to the array inside `src/data/courses-manifest.json`.
3. Ensure the course is categorized by adding its ID directly into the matching subcategory array inside `src/data/course-catalog.json`.
4. Import and register it inside `src/data/courses.ts` so it becomes part of the static bundle.

---

### 2. Transitioning to a Remote API (The Future State)
The data fetching logic located inside `src/lib/courseContent.ts` is designed for hybrid API testing. It is coded to check for a specific environment variable first. If it detects the variable, it behaves like a live dynamic application; if not (or if the API fails), it uses the local files as a fallback.

**To switch the site to Live API mode:**
Add the following to your `.env` file:
```env
NEXT_PUBLIC_CONTENT_BASE_URL="https://api.your-future-domain.com"
```

Once this environment variable is populated, `courseContent.ts` will immediately begin attempting to fetch:
- `$NEXT_PUBLIC_CONTENT_BASE_URL/src/data/course-catalog.json`
- `$NEXT_PUBLIC_CONTENT_BASE_URL/src/data/courses-manifest.json`
- `$NEXT_PUBLIC_CONTENT_BASE_URL/src/data/courses/[course-id].json`

*Note for the next developer:* If you implement a Headless CMS (like Sanity, Strapi, or Contentful), you will need to update the endpoint paths defined at the top of `src/lib/courseContent.ts` underneath `DEFAULT_COURSE_CATALOG_PATH` to match your new CMS REST/GraphQL route structures.

## Setup & Running the Project

First, ensure dependencies are installed, then run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
