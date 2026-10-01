# 🚀 Main React Topic — Advanced React Roadmap

> A practical, interview-focused and project-focused roadmap for learning **Advanced React + React Ecosystem**.
>
> This repository is designed for learning concepts through:
>
> **Concept → Small Example → API Example → Production Pattern → Project**

---

# 📚 Table of Contents

1. [How to Use This Repository](#1-how-to-use-this-repository)
2. [Advanced React Core](#2-advanced-react-core)
3. [Advanced Hooks](#3-advanced-hooks)
4. [Custom Hooks](#4-custom-hooks)
5. [React Performance Optimization](#5-react-performance-optimization)
6. [Component Patterns](#6-component-patterns)
7. [TanStack Query](#7-tanstack-query)
8. [Pagination](#8-pagination)
9. [Infinite Scroll](#9-infinite-scroll)
10. [Search, Filter and Sort](#10-search-filter-and-sort)
11. [Debouncing and Throttling](#11-debouncing-and-throttling)
12. [Intersection Observer](#12-intersection-observer)
13. [React Router Advanced](#13-react-router-advanced)
14. [State Management](#14-state-management)
15. [Redux Toolkit Advanced](#15-redux-toolkit-advanced)
16. [RTK Query](#16-rtk-query)
17. [Forms](#17-forms)
18. [API and Network Handling](#18-api-and-network-handling)
19. [Authentication](#19-authentication)
20. [Advanced UI Patterns](#20-advanced-ui-patterns)
21. [React Portals](#21-react-portals)
22. [Error Handling](#22-error-handling)
23. [Lazy Loading and Code Splitting](#23-lazy-loading-and-code-splitting)
24. [Suspense](#24-suspense)
25. [Modern React APIs](#25-modern-react-apis)
26. [CSR, SSR, SSG and Hydration](#26-csr-ssr-ssg-and-hydration)
27. [File Upload](#27-file-upload)
28. [Real-Time React](#28-real-time-react)
29. [Offline and Network State](#29-offline-and-network-state)
30. [Testing](#30-testing)
31. [Advanced Data UI](#31-advanced-data-ui)
32. [Image Optimization](#32-image-optimization)
33. [Theme Systems](#33-theme-systems)
34. [React Architecture](#34-react-architecture)
35. [Advanced Custom Hooks Practice](#35-advanced-custom-hooks-practice)
36. [Performance and Rendering Mental Model](#36-performance-and-rendering-mental-model)
37. [Production Patterns](#37-production-patterns)
38. [Mini Projects](#38-mini-projects)
39. [Capstone Projects](#39-capstone-projects)
40. [Interview Revision Checklist](#40-interview-revision-checklist)

---

# 1. How to Use This Repository

This repository should not become only a collection of definitions.

For every topic, follow this learning cycle:

```text
1. Understand the concept
        ↓
2. Write a tiny example
        ↓
3. Use it with an API
        ↓
4. Handle loading/error/empty states
        ↓
5. Add edge cases
        ↓
6. Convert it into a reusable component/hook
        ↓
7. Use it inside a mini project
```

## Recommended Folder Pattern

```text
main-react-topic/
│
├── 01-react-advanced/
├── 02-hooks/
├── 03-custom-hooks/
├── 04-performance/
├── 05-component-patterns/
├── 06-react-router/
├── 07-tanstack-query/
├── 08-state-management/
├── 09-forms/
├── 10-api-handling/
├── 11-authentication/
├── 12-search-filter-sort/
├── 13-debounce-throttle/
├── 14-intersection-observer/
├── 15-lazy-loading/
├── 16-portals/
├── 17-error-handling/
├── 18-testing/
├── 19-real-time/
├── 20-offline/
├── 21-file-upload/
├── 22-ui-patterns/
├── 23-modern-react/
├── 24-rendering/
├── 25-architecture/
│
└── projects/
    ├── advanced-product-explorer/
    ├── infinite-product-feed/
    ├── authentication-system/
    ├── admin-dashboard/
    └── realtime-chat/
```

---

# 2. Advanced React Core

## 2.1 Component Composition

Learn how components can be combined instead of creating one giant component.

Topics:

- [ ] Component composition
- [ ] `children`
- [ ] Passing components as props
- [ ] Layout components
- [ ] Wrapper components
- [ ] Slot-like patterns
- [ ] Flexible component APIs

Example:

```jsx
function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

function App() {
  return (
    <Card>
      <h1>Hello React</h1>
      <p>Content</p>
    </Card>
  );
}
```

---

## 2.2 Props Patterns

Learn:

- [ ] Primitive props
- [ ] Object props
- [ ] Array props
- [ ] Function props
- [ ] Component props
- [ ] Children
- [ ] Default values
- [ ] Destructuring
- [ ] Props spreading
- [ ] Callback props

Example:

```jsx
<ProductCard
  title="Shoes"
  price={999}
  product={product}
  onDelete={handleDelete}
/>
```

---

## 2.3 Derived State

Do not store something in state if it can be calculated from existing state/props.

Bad:

```jsx
const [products, setProducts] = useState([]);
const [productCount, setProductCount] = useState(0);
```

Better:

```jsx
const productCount = products.length;
```

Learn:

- [ ] Derived values
- [ ] Avoid duplicated state
- [ ] Memoized derived values
- [ ] Server data vs UI state

---

## 2.4 Controlled vs Uncontrolled Components

Learn:

- [ ] Controlled input
- [ ] Uncontrolled input
- [ ] `useRef`
- [ ] Form libraries
- [ ] When to use each approach

Controlled:

```jsx
<input
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
```

Uncontrolled:

```jsx
const inputRef = useRef();

<input ref={inputRef} />
```

---

# 3. Advanced Hooks

## `useState`

Learn:

- [ ] Functional updates
- [ ] State batching
- [ ] Object state
- [ ] Array state
- [ ] Lazy initialization
- [ ] State update pitfalls

Example:

```jsx
setCount((previousCount) => previousCount + 1);
```

---

## `useEffect`

Learn deeply:

- [ ] Effect purpose
- [ ] Dependency array
- [ ] Empty dependency array
- [ ] Dependency values
- [ ] Cleanup
- [ ] Event listeners
- [ ] Timers
- [ ] API requests
- [ ] AbortController
- [ ] Avoiding unnecessary effects
- [ ] Infinite effect loops

Cleanup:

```jsx
useEffect(() => {
  const id = setInterval(() => {
    console.log("running");
  }, 1000);

  return () => {
    clearInterval(id);
  };
}, []);
```

---

## `useRef`

Learn:

- [ ] DOM reference
- [ ] Mutable values
- [ ] Previous value
- [ ] Timer IDs
- [ ] Avoiding render
- [ ] Focus management

---

## `useMemo`

Use it to memoize expensive calculated values when there is a real performance reason.

```jsx
const filteredProducts = useMemo(() => {
  return products.filter((product) =>
    product.title.includes(search)
  );
}, [products, search]);
```

Learn:

- [ ] What it does
- [ ] What it does not do
- [ ] Dependency array
- [ ] Expensive calculations
- [ ] Avoid premature optimization

---

## `useCallback`

```jsx
const handleDelete = useCallback((id) => {
  deleteProduct(id);
}, []);
```

Learn:

- [ ] Function identity
- [ ] React.memo relationship
- [ ] Dependencies
- [ ] When it helps
- [ ] When it adds unnecessary complexity

---

## `useReducer`

Learn:

- [ ] Reducer
- [ ] Action
- [ ] Dispatch
- [ ] Initial state
- [ ] Complex state transitions
- [ ] Reducer + Context

---

## `useContext`

Learn:

- [ ] Provider
- [ ] Consumer
- [ ] Global-ish application state
- [ ] Context re-renders
- [ ] Splitting contexts
- [ ] Context + reducer

---

# 4. Custom Hooks

Custom hooks are one of the most useful advanced React skills.

## Build These

```text
useToggle
useLocalStorage
useDebounce
useThrottle
usePrevious
useOutsideClick
useIntersectionObserver
useMediaQuery
useWindowSize
useOnlineStatus
usePagination
useInfiniteScroll
useAuth
useClickOutside
useCopyToClipboard
useFetch
```

Example:

```jsx
function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const toggle = () => {
    setValue((previous) => !previous);
  };

  return [value, toggle];
}
```

Practice:

- [ ] Every hook should have a small demo
- [ ] Add loading/error states where appropriate
- [ ] Test hooks
- [ ] Reuse hooks in projects

---

# 5. React Performance Optimization

Performance is not about blindly using `useMemo` everywhere.

First identify the problem.

## Learn

- [ ] Re-render
- [ ] Reconciliation
- [ ] Component tree
- [ ] Props identity
- [ ] Function identity
- [ ] Object identity
- [ ] React.memo
- [ ] useMemo
- [ ] useCallback
- [ ] State colocation
- [ ] Component splitting
- [ ] Context optimization
- [ ] List rendering
- [ ] Virtualization
- [ ] Code splitting
- [ ] Lazy loading
- [ ] React Profiler

---

## React.memo

```jsx
const ProductCard = React.memo(function ProductCard({
  product
}) {
  return <div>{product.title}</div>;
});
```

Understand:

```text
Parent renders
      ↓
Does child need to render?
      ↓
Props changed?
      ↓
React.memo can skip rendering
```

---

## List Performance

Learn:

- [ ] Stable keys
- [ ] Avoid index keys when identity can change
- [ ] Memoized list items
- [ ] Pagination
- [ ] Infinite scroll
- [ ] Virtualization

---

# 6. Component Patterns

## Compound Components

Example:

```jsx
<Tabs>
  <Tabs.List>
    <Tabs.Tab value="home">Home</Tabs.Tab>
    <Tabs.Tab value="profile">Profile</Tabs.Tab>
  </Tabs.List>

  <Tabs.Panel value="home">
    Home content
  </Tabs.Panel>
</Tabs>
```

Learn:

- [ ] Context-based compound components
- [ ] Shared internal state
- [ ] Flexible APIs

---

## Render Props

```jsx
<DataProvider>
  {(data) => <ProductList data={data} />}
</DataProvider>
```

Learn:

- [ ] Function as children
- [ ] Reusable behavior
- [ ] Legacy patterns
- [ ] Comparison with custom hooks

---

## Higher Order Components

```jsx
const withAuth = (Component) => {
  return function ProtectedComponent(props) {
    return isLoggedIn
      ? <Component {...props} />
      : <Login />;
  };
};
```

Learn:

- [ ] HOC pattern
- [ ] Props forwarding
- [ ] Display names
- [ ] HOC limitations
- [ ] Why hooks are often preferred today

---

## Other Patterns

- [ ] Provider pattern
- [ ] Container/presentational pattern
- [ ] Headless components
- [ ] Component composition
- [ ] Controlled component pattern
- [ ] Uncontrolled component pattern

---

# 7. TanStack Query

This should be one of the biggest sections of this repository.

## Basic Query

```jsx
const {
  data,
  isPending,
  error
} = useQuery({
  queryKey: ["products"],
  queryFn: getAllProducts,
});
```

Learn:

- [ ] `useQuery`
- [ ] `queryKey`
- [ ] `queryFn`
- [ ] `isPending`
- [ ] `isError`
- [ ] `error`
- [ ] `data`
- [ ] `isFetching`

---

# 7.1 Query Keys

Understand:

```jsx
["products"]

["products", productId]

["products", { category, search }]
```

Learn:

- [ ] Query identity
- [ ] Query key arrays
- [ ] Dynamic keys
- [ ] Filter-based keys
- [ ] Cache separation

---

# 7.2 staleTime

Learn the difference between:

```text
Fresh data
   ↓
Stale data
   ↓
Garbage collected cache
```

Topics:

- [ ] `staleTime`
- [ ] `gcTime`
- [ ] Refetching
- [ ] Background refetch
- [ ] Cache lifetime

---

# 7.3 Mutations

```jsx
const mutation = useMutation({
  mutationFn: createProduct,
});
```

Learn:

- [ ] `useMutation`
- [ ] `mutate`
- [ ] `mutateAsync`
- [ ] `onSuccess`
- [ ] `onError`
- [ ] `onSettled`
- [ ] Loading state
- [ ] Mutation errors

---

# 7.4 Query Invalidation

```jsx
queryClient.invalidateQueries({
  queryKey: ["products"],
});
```

Understand:

```text
Create product
      ↓
Mutation succeeds
      ↓
Invalidate products
      ↓
Products query refetches
```

---

# 7.5 setQueryData

Learn direct cache updates:

```jsx
queryClient.setQueryData(
  ["product", id],
  updatedProduct
);
```

---

# 7.6 Optimistic Updates

Learn:

```text
User clicks Like
      ↓
UI updates immediately
      ↓
API request
      ↓
Success → keep change
Failure → rollback
```

Topics:

- [ ] `onMutate`
- [ ] Snapshot
- [ ] Optimistic update
- [ ] Rollback
- [ ] `onError`
- [ ] `onSettled`

---

# 7.7 Prefetching

Learn:

```text
Hover product
      ↓
Prefetch product details
      ↓
Click product
      ↓
Data may already be cached
```

---

# 7.8 Dependent Queries

Example:

```text
Get user
   ↓
Get user's orders
   ↓
Get order details
```

Learn `enabled`.

---

# 7.9 Parallel Queries

Learn:

- [ ] Multiple independent queries
- [ ] `useQueries`
- [ ] Loading aggregation
- [ ] Error aggregation

---

# 7.10 Infinite Queries

```jsx
const {
  data,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage
} = useInfiniteQuery({
  queryKey: ["products"],
  queryFn: fetchProducts,
  initialPageParam: 1,
  getNextPageParam: (lastPage) =>
    lastPage.nextPage,
});
```

Learn deeply:

- [ ] `useInfiniteQuery`
- [ ] `initialPageParam`
- [ ] `pageParam`
- [ ] `getNextPageParam`
- [ ] `fetchNextPage`
- [ ] `hasNextPage`
- [ ] `isFetchingNextPage`
- [ ] Flattening pages
- [ ] Cursor pagination
- [ ] Infinite scroll

---

# 8. Pagination

Pagination should have multiple implementations.

## Basic Pagination

```text
< Previous
1 2 3 4 5
Next >
```

Learn:

- [ ] Current page
- [ ] Total pages
- [ ] Page size
- [ ] Previous
- [ ] Next
- [ ] First
- [ ] Last

---

## Server Pagination

Example:

```text
GET /products?page=2&limit=10
```

Learn:

- [ ] Query parameters
- [ ] API response metadata
- [ ] Total count
- [ ] Total pages
- [ ] Current page
- [ ] Page size

---

## Offset Pagination

```text
offset = 20
limit = 10
```

Understand how offset changes when page changes.

---

## Cursor Pagination

```text
GET /products?cursor=abc123&limit=10
```

Learn:

- [ ] Cursor
- [ ] Next cursor
- [ ] Previous cursor
- [ ] Why cursor pagination is useful for changing datasets

---

## Pagination + Search

```text
Search
  ↓
Filter API
  ↓
Pagination
```

Important edge case:

```text
User is on page 5
       ↓
Search changes
       ↓
Reset page to 1
```

---

# 9. Infinite Scroll

## Basic Infinite Scroll

```text
Product 1
Product 2
Product 3
...
Product 10
       ↓
Reach bottom
       ↓
Fetch next page
       ↓
Product 11
Product 12
...
```

Learn:

- [ ] Scroll event
- [ ] Intersection Observer
- [ ] Loading indicator
- [ ] Duplicate request prevention
- [ ] End-of-data handling
- [ ] Error handling
- [ ] Retry

---

## TanStack Infinite Scroll

Learn:

```text
useInfiniteQuery
+
IntersectionObserver
+
fetchNextPage
```

Important states:

```text
isPending
isFetching
isFetchingNextPage
hasNextPage
isError
```

---

# 10. Search, Filter and Sort

Build an advanced product explorer.

## Search

- [ ] Client search
- [ ] Server search
- [ ] Search query parameter
- [ ] Debounced search
- [ ] Search + pagination
- [ ] Search + infinite scroll

---

## Filters

- [ ] Category
- [ ] Price
- [ ] Brand
- [ ] Rating
- [ ] Availability
- [ ] Multiple filters

Example URL:

```text
/products?category=shoes&minPrice=500&maxPrice=2000
```

---

## Sorting

- [ ] Price low → high
- [ ] Price high → low
- [ ] Newest
- [ ] Rating
- [ ] Name

---

## Combined State

```text
Search
+
Category
+
Price
+
Sort
+
Pagination
```

This is an excellent real-world exercise.

---

# 11. Debouncing and Throttling

## Debouncing

Useful for search.

```text
User types:
r
re
rea
reac
react

Wait 300ms

API request → react
```

Learn:

- [ ] `setTimeout`
- [ ] Cleanup
- [ ] Custom `useDebounce`
- [ ] Debounced API request
- [ ] Search debounce

---

## Throttling

Useful for events that happen continuously.

Examples:

- [ ] Scroll
- [ ] Resize
- [ ] Mouse movement

Understand:

```text
Debounce:
Wait until activity stops.

Throttle:
Run at controlled intervals.
```

---

# 12. Intersection Observer

Learn the browser API behind many infinite-scroll and lazy-loading patterns.

Basic idea:

```text
Sentinel element
      ↓
Enters viewport
      ↓
Observer callback
      ↓
fetchNextPage()
```

Use cases:

- [ ] Infinite scroll
- [ ] Lazy images
- [ ] Load more
- [ ] Visibility tracking
- [ ] Analytics
- [ ] Animation triggers

Build:

```jsx
useIntersectionObserver()
```

---

# 13. React Router Advanced

Learn:

- [ ] Browser router
- [ ] Routes
- [ ] Nested routes
- [ ] Layout routes
- [ ] `<Outlet />`
- [ ] Dynamic routes
- [ ] Route parameters
- [ ] Query parameters
- [ ] `useParams`
- [ ] `useSearchParams`
- [ ] `useNavigate`
- [ ] `useLocation`
- [ ] `NavLink`
- [ ] Protected routes
- [ ] Public routes
- [ ] 404 routes
- [ ] Error routes
- [ ] Lazy routes
- [ ] Route-level code splitting

---

## URL State

Instead of:

```text
React state only
```

Learn:

```text
URL
 ↓
search
filter
sort
page
```

Example:

```text
/products?page=2&search=shoe&sort=price
```

This makes the page shareable and refresh-friendly.

---

# 14. State Management

Understand the difference between:

```text
Local UI State
Server State
Global Client State
URL State
Form State
```

---

## Local State

Use for:

- [ ] Modal open/close
- [ ] Input value
- [ ] Selected tab
- [ ] Dropdown
- [ ] Temporary UI state

---

## Context

Use for appropriate shared values:

- [ ] Theme
- [ ] Locale
- [ ] Authentication context
- [ ] Small application-wide state

---

## Reducer

Use when state transitions become complex.

---

## Server State

Use TanStack Query for:

- [ ] API data
- [ ] Cache
- [ ] Refetch
- [ ] Synchronization
- [ ] Server mutations

---

# 15. Redux Toolkit Advanced

Learn:

- [ ] Store
- [ ] Slice
- [ ] Reducer
- [ ] Action
- [ ] Dispatch
- [ ] Selector
- [ ] `createAsyncThunk`
- [ ] Extra reducers
- [ ] Loading states
- [ ] Error states
- [ ] Middleware
- [ ] DevTools
- [ ] Memoized selectors
- [ ] Normalized state
- [ ] Entity adapters

---

## Redux Serialization

Understand why this can be problematic:

```text
Non-serializable:
AxiosHeaders
Date objects
Functions
Class instances
```

Learn:

- [ ] Serializable actions
- [ ] Serializable state
- [ ] Redux middleware warnings
- [ ] How to store API response data safely

---

# 16. RTK Query

Learn:

- [ ] API slice
- [ ] Queries
- [ ] Mutations
- [ ] Cache
- [ ] Tags
- [ ] Invalidations
- [ ] Generated hooks
- [ ] Polling
- [ ] Lazy queries
- [ ] Authentication headers

Compare:

```text
TanStack Query
vs
RTK Query
```

Understand when each architecture makes sense.

---

# 17. Forms

## React Hook Form

Learn:

- [ ] `register`
- [ ] `handleSubmit`
- [ ] `watch`
- [ ] `getValues`
- [ ] `setValue`
- [ ] `reset`
- [ ] `Controller`
- [ ] `formState`
- [ ] Errors
- [ ] Dynamic fields
- [ ] Field arrays
- [ ] Nested objects
- [ ] File inputs

---

## Validation

Learn:

- [ ] Client validation
- [ ] Server validation
- [ ] Zod
- [ ] Yup
- [ ] React Hook Form + Zod
- [ ] API error mapping

---

## Advanced Form

Build:

```text
Product Create Form

title
description
price
currency
sizes[]
stock
images[]
category
```

Include:

- [ ] Dynamic size fields
- [ ] Image preview
- [ ] Validation
- [ ] API submission
- [ ] Server errors
- [ ] Loading state

---

# 18. API and Network Handling

Learn:

- [ ] Fetch
- [ ] Axios
- [ ] API service layer
- [ ] Request helpers
- [ ] Response handling
- [ ] Error handling
- [ ] Axios interceptors
- [ ] Request interceptor
- [ ] Response interceptor
- [ ] AbortController
- [ ] Request cancellation
- [ ] Retry
- [ ] Timeout
- [ ] Authentication headers

---

## API Service Architecture

Instead of putting API calls everywhere:

```text
components
     ↓
hooks
     ↓
API service
     ↓
Axios
     ↓
Backend
```

Example:

```text
src/
├── api/
│   ├── authApi.js
│   ├── productApi.js
│   └── cartApi.js
│
├── hooks/
├── components/
└── pages/
```

---

# 19. Authentication

Build a complete authentication flow.

## Register

```text
Register
 ↓
API
 ↓
User created
 ↓
Login
```

## Login

```text
Login
 ↓
Backend
 ↓
Access Token
 ↓
Application
```

---

## Access Token + Refresh Token

Understand:

```text
Access Token
Short-lived
     +
Refresh Token
Longer-lived
```

Learn:

- [ ] Access token
- [ ] Refresh token
- [ ] Cookies
- [ ] Authorization header
- [ ] Token expiration
- [ ] Refresh flow
- [ ] Logout
- [ ] Auth hydration
- [ ] Protected routes

---

## Axios Interceptor Flow

```text
API request
     ↓
Access token
     ↓
Request
     ↓
401?
     ↓
Refresh token
     ↓
Get new access token
     ↓
Retry original request
```

Learn carefully how to prevent:

- [ ] Infinite refresh loops
- [ ] Duplicate refresh calls
- [ ] Race conditions

---

# 20. Advanced UI Patterns

Build reusable UI components:

- [ ] Modal
- [ ] Drawer
- [ ] Dropdown
- [ ] Tooltip
- [ ] Accordion
- [ ] Tabs
- [ ] Toast
- [ ] Confirmation dialog
- [ ] Command palette
- [ ] Popover
- [ ] Skeleton
- [ ] Empty state
- [ ] Error state

---

## Accessibility

Every advanced UI should consider:

- [ ] Keyboard navigation
- [ ] Focus management
- [ ] ARIA labels
- [ ] Escape key
- [ ] Screen-reader-friendly controls
- [ ] Semantic HTML
- [ ] Focus trap for modal dialogs

---

# 21. React Portals

Learn:

```jsx
createPortal(children, domNode)
```

Build:

- [ ] Modal
- [ ] Tooltip
- [ ] Toast
- [ ] Dropdown
- [ ] Overlay

Understand:

```text
React tree
     ↓
Component remains logically connected

DOM tree
     ↓
Content can render somewhere else
```

---

# 22. Error Handling

## API Error

```text
Request
 ↓
API failure
 ↓
Error state
 ↓
User-friendly UI
```

---

## Error Boundaries

Learn:

- [ ] What error boundaries catch
- [ ] Component tree failure
- [ ] Fallback UI
- [ ] Recovery
- [ ] Logging

Concept:

```jsx
<ErrorBoundary fallback={<ErrorPage />}>
  <Application />
</ErrorBoundary>
```

---

## UI States

Every API-driven component should consider:

```text
Loading
Success
Empty
Error
Fetching
Retrying
```

Do not design only the success state.

---

# 23. Lazy Loading and Code Splitting

Learn:

- [ ] Dynamic imports
- [ ] `React.lazy`
- [ ] `Suspense`
- [ ] Route lazy loading
- [ ] Component lazy loading
- [ ] Bundle splitting
- [ ] Loading fallback

Example:

```jsx
const ProductPage = lazy(() =>
  import("./pages/ProductPage")
);
```

---

# 24. Suspense

Learn the mental model of Suspense and where it can be used.

Topics:

- [ ] Suspense boundary
- [ ] Fallback
- [ ] Lazy components
- [ ] Streaming concepts
- [ ] Suspense with modern React patterns
- [ ] Multiple boundaries

Example:

```jsx
<Suspense fallback={<Loader />}>
  <ProductPage />
</Suspense>
```

---

# 25. Modern React APIs

Keep this section updated as React evolves.

Topics:

- [ ] `use`
- [ ] `useActionState`
- [ ] `useFormStatus`
- [ ] `useOptimistic`
- [ ] Actions
- [ ] Form actions
- [ ] Suspense
- [ ] Transitions
- [ ] `startTransition`
- [ ] `useTransition`
- [ ] `useDeferredValue`
- [ ] React Compiler concepts
- [ ] Server Components concepts
- [ ] Server Actions concepts

Always verify version-specific behavior before treating a feature as production-ready.

---

# 26. CSR, SSR, SSG and Hydration

Understand rendering architectures.

## CSR

```text
Browser
 ↓
JavaScript
 ↓
React
 ↓
UI
```

## SSR

```text
Server
 ↓
HTML
 ↓
Browser
 ↓
Hydration
```

## SSG

```text
Build time
 ↓
HTML generated
 ↓
Served later
```

## Learn

- [ ] CSR
- [ ] SSR
- [ ] SSG
- [ ] ISR concepts
- [ ] Hydration
- [ ] Hydration mismatch
- [ ] Streaming
- [ ] Server Components
- [ ] Client Components

---

# 27. File Upload

Build a complete file upload system.

## Single File

- [ ] File input
- [ ] Validation
- [ ] Preview
- [ ] Upload
- [ ] Progress
- [ ] Error

## Multiple Files

- [ ] Multiple selection
- [ ] Preview list
- [ ] Remove selected image
- [ ] Reorder images
- [ ] Upload all
- [ ] Failed upload handling

## Drag and Drop

- [ ] Drag enter
- [ ] Drag leave
- [ ] Drop
- [ ] File validation
- [ ] Preview

---

# 28. Real-Time React

Learn WebSocket-based applications.

## Socket.IO

Topics:

- [ ] Connection
- [ ] Disconnect
- [ ] Events
- [ ] Rooms
- [ ] Authentication
- [ ] Reconnection
- [ ] Server events
- [ ] Client events

---

## Chat Project

Features:

```text
Login
 ↓
Chat room
 ↓
Messages
 ↓
Typing indicator
 ↓
Online users
 ↓
Read status
```

---

# 29. Offline and Network State

Learn:

- [ ] `navigator.onLine`
- [ ] Online/offline UI
- [ ] Retry
- [ ] Cached data
- [ ] Persistence
- [ ] Offline-first concepts
- [ ] Network-aware fetching

Build:

```text
Internet disconnected

┌─────────────────────────┐
│ You are offline         │
│ Showing cached data     │
└─────────────────────────┘
```

---

# 30. Testing

Testing should be part of advanced React.

## Vitest

Learn:

- [ ] Test files
- [ ] Assertions
- [ ] Mocking
- [ ] Async tests

## React Testing Library

Learn:

- [ ] Render
- [ ] Screen
- [ ] User events
- [ ] Queries
- [ ] Async UI
- [ ] Forms
- [ ] Error states
- [ ] Loading states

Example test cases:

```text
Product page

✓ renders products
✓ shows loading
✓ shows error
✓ filters products
✓ opens product
✓ adds product to cart
```

---

## E2E Testing

Learn:

- [ ] Playwright
- [ ] Login flow
- [ ] Product flow
- [ ] Cart flow
- [ ] Checkout flow

---

# 31. Advanced Data UI

## Data Table

Build:

- [ ] Sorting
- [ ] Filtering
- [ ] Pagination
- [ ] Row selection
- [ ] Bulk actions
- [ ] Column visibility
- [ ] Search
- [ ] Loading
- [ ] Empty state

---

## Large Dataset

Learn:

```text
100,000 records
       ↓
Virtualization
       ↓
Only visible rows rendered
```

Topics:

- [ ] Virtualized lists
- [ ] Virtualized tables
- [ ] Pagination
- [ ] Infinite loading

---

# 32. Image Optimization

Learn:

- [ ] Lazy loading
- [ ] Responsive images
- [ ] Preview
- [ ] Placeholder
- [ ] Error fallback
- [ ] Image compression concepts
- [ ] CDN concepts
- [ ] Modern image formats

Example:

```jsx
<img
  src={image}
  loading="lazy"
  alt={title}
/>
```

---

# 33. Theme Systems

Build:

```text
Light
Dark
System
```

Learn:

- [ ] Context
- [ ] CSS variables
- [ ] Tailwind
- [ ] LocalStorage
- [ ] System preference
- [ ] Theme persistence

---

# 34. React Architecture

## Basic Architecture

```text
src/
├── components/
├── pages/
├── layouts/
├── hooks/
├── api/
├── utils/
├── store/
└── assets/
```

---

## Feature-Based Architecture

```text
src/
├── features/
│   ├── auth/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── api/
│   │   └── pages/
│   │
│   ├── products/
│   ├── cart/
│   └── users/
│
├── components/
├── layouts/
├── routes/
├── services/
├── store/
└── utils/
```

Learn:

- [ ] Separation of concerns
- [ ] Feature boundaries
- [ ] Reusable components
- [ ] API separation
- [ ] State separation
- [ ] UI vs business logic
- [ ] Scaling React applications

---

# 35. Advanced Custom Hooks Practice

Create these one by one.

## `useDebounce`

```text
Input
 ↓
useDebounce
 ↓
API
```

## `useLocalStorage`

```text
React state
 ↕
localStorage
```

## `usePrevious`

```text
current value
previous value
```

## `useOutsideClick`

```text
Click outside
 ↓
callback
```

## `useMediaQuery`

```text
Desktop
Tablet
Mobile
```

## `useOnlineStatus`

```text
Online
Offline
```

## `usePagination`

Return:

```js
{
  page,
  nextPage,
  previousPage,
  setPage,
  resetPage
}
```

## `useInfiniteScroll`

Return:

```js
{
  sentinelRef,
  isLoading,
  hasMore
}
```

---

# 36. Performance and Rendering Mental Model

Understand React rendering instead of memorizing optimization hooks.

## Learn

- [ ] Initial render
- [ ] Re-render
- [ ] Commit
- [ ] DOM update
- [ ] State update
- [ ] Parent render
- [ ] Child render
- [ ] Props comparison
- [ ] Referential equality
- [ ] Memoization
- [ ] Batching
- [ ] Transitions

---

## Referential Equality

Understand why:

```js
{} !== {}
```

and:

```js
[] !== []
```

and:

```js
() => {} !== () => {}
```

This is important for understanding:

- [ ] React.memo
- [ ] useMemo
- [ ] useCallback
- [ ] Dependency arrays

---

# 37. Production Patterns

Learn patterns used in real applications.

## Loading State

```text
Loading
 ↓
Skeleton
```

## Empty State

```text
No products found
 ↓
Clear filters
```

## Error State

```text
Something went wrong
 ↓
Retry
```

## Optimistic UI

```text
Click
 ↓
Instant UI update
 ↓
API
 ↓
Success / Rollback
```

## Retry

```text
Request
 ↓
Failed
 ↓
Retry
 ↓
Success
```

---

## Feature Flags

Learn:

```text
Feature disabled
       ↓
Feature flag
       ↓
Feature enabled
```

Use cases:

- [ ] Gradual rollout
- [ ] A/B experiments
- [ ] Beta features

---

# 38. Mini Projects

These projects should combine individual topics.

---

## Project 1 — Advanced Product Explorer

Features:

```text
Products
 ├── Search
 ├── Category filter
 ├── Price filter
 ├── Sorting
 ├── Pagination
 ├── URL state
 └── TanStack Query
```

Topics covered:

- React Query
- Search
- Filter
- Sort
- Pagination
- URL parameters
- Loading
- Error
- Empty states

---

## Project 2 — Infinite Product Feed

Features:

```text
useInfiniteQuery
+
Cursor pagination
+
Intersection Observer
+
Skeleton loading
+
Error retry
```

Topics covered:

- Infinite queries
- Infinite scroll
- Cursor pagination
- Intersection Observer
- API states

---

## Project 3 — Authentication System

Features:

```text
Register
Login
Logout
Protected routes
Access token
Refresh token
Axios interceptor
Auth hydration
Role-based UI
```

---

## Project 4 — Admin Dashboard

Features:

```text
Dashboard
Products
Users
Orders
Statistics
Search
Filters
Pagination
Sorting
Charts
Tables
```

Advanced topics:

- [ ] Role-based access
- [ ] Server state
- [ ] Query caching
- [ ] Optimistic update
- [ ] Data table

---

## Project 5 — Real-Time Chat

Features:

```text
Authentication
 ↓
Chat rooms
 ↓
Messages
 ↓
Typing indicator
 ↓
Online status
 ↓
Read status
```

Technologies:

```text
React
Socket.IO
TanStack Query
React Router
Authentication
```

---

# 39. Capstone Projects

## Capstone 1 — Full MERN E-Commerce Frontend

Build:

```text
Authentication
Products
Search
Filters
Sorting
Pagination
Infinite scroll
Product details
Cart
Wishlist
Checkout
Orders
Profile
Admin dashboard
```

Advanced React topics:

```text
React Router
TanStack Query
Redux Toolkit
React Hook Form
Zod
Optimistic Updates
Lazy Loading
Error Boundaries
Pagination
Infinite Scroll
```

---

## Capstone 2 — AI Search Application

Build:

```text
Search
 ↓
Debounce
 ↓
API
 ↓
Streaming response
 ↓
Result UI
```

Add:

- [ ] Search history
- [ ] Loading state
- [ ] Error handling
- [ ] Streaming UI
- [ ] Pagination
- [ ] Authentication
- [ ] Saved searches

---

## Capstone 3 — Social Media Feed

Features:

```text
Feed
Posts
Likes
Comments
Infinite scroll
Optimistic likes
Image upload
Notifications
Real-time updates
```

This single project can practice a huge portion of advanced React.

---

# 40. Interview Revision Checklist

## React

- [ ] What causes a React component to re-render?
- [ ] What is reconciliation?
- [ ] What is component composition?
- [ ] Controlled vs uncontrolled?
- [ ] Why should state not be duplicated?
- [ ] Why are keys important?
- [ ] Why should array index sometimes be avoided as a key?

---

## Hooks

- [ ] `useState`
- [ ] `useEffect`
- [ ] `useRef`
- [ ] `useMemo`
- [ ] `useCallback`
- [ ] `useReducer`
- [ ] `useContext`
- [ ] Custom hooks

---

## Performance

- [ ] React.memo
- [ ] Memoization
- [ ] Referential equality
- [ ] Expensive calculations
- [ ] Large lists
- [ ] Virtualization
- [ ] Code splitting

---

## TanStack Query

- [ ] Query
- [ ] Mutation
- [ ] Query key
- [ ] staleTime
- [ ] gcTime
- [ ] Invalidation
- [ ] Cache
- [ ] Prefetching
- [ ] Optimistic updates
- [ ] Infinite queries
- [ ] Pagination

---

## Router

- [ ] Nested routes
- [ ] Dynamic routes
- [ ] Search params
- [ ] Protected routes
- [ ] Layout routes
- [ ] Outlet
- [ ] Lazy routes

---

## State Management

- [ ] Local state
- [ ] Context
- [ ] Reducer
- [ ] Redux Toolkit
- [ ] RTK Query
- [ ] Server state
- [ ] URL state

---

## Forms

- [ ] React Hook Form
- [ ] Controlled input
- [ ] Validation
- [ ] Zod
- [ ] Dynamic fields
- [ ] File upload
- [ ] Server errors

---

# 🏁 Recommended Learning Order

If learning everything at once feels too large, follow this order:

```text
LEVEL 1 — React Core
│
├── Advanced props
├── Composition
├── useState
├── useEffect
├── useRef
├── useReducer
└── useContext

        ↓

LEVEL 2 — Custom Hooks
│
├── useDebounce
├── useLocalStorage
├── usePrevious
├── useOutsideClick
├── useMediaQuery
└── useIntersectionObserver

        ↓

LEVEL 3 — React Router
│
├── Nested routes
├── Protected routes
├── Dynamic routes
└── Search params

        ↓

LEVEL 4 — Server State
│
├── TanStack Query
├── Query
├── Mutation
├── Cache
├── Invalidation
└── Optimistic updates

        ↓

LEVEL 5 — Data Handling
│
├── Pagination
├── Infinite scroll
├── Search
├── Filter
├── Sort
├── Debounce
└── Intersection Observer

        ↓

LEVEL 6 — State Management
│
├── Context
├── Reducer
├── Redux Toolkit
└── RTK Query

        ↓

LEVEL 7 — Performance
│
├── React.memo
├── useMemo
├── useCallback
├── Lazy loading
├── Code splitting
└── Virtualization

        ↓

LEVEL 8 — Production React
│
├── Authentication
├── Axios interceptors
├── Forms
├── Error boundaries
├── File upload
├── Testing
└── Real-time

        ↓

LEVEL 9 — Advanced Architecture
│
├── Feature architecture
├── CSR
├── SSR
├── SSG
├── Hydration
├── Suspense
└── Modern React

        ↓

LEVEL 10 — Capstone
│
└── Build a large MERN application
```

---

# 🎯 Final Master Checklist

Use this as the main progress tracker.

## React Core

- [ ] Composition
- [ ] Props patterns
- [ ] Children
- [ ] Derived state
- [ ] Controlled components
- [ ] Uncontrolled components

## Hooks

- [ ] useState
- [ ] useEffect
- [ ] useRef
- [ ] useMemo
- [ ] useCallback
- [ ] useReducer
- [ ] useContext
- [ ] Custom Hooks

## Data Fetching

- [ ] TanStack Query
- [ ] Queries
- [ ] Mutations
- [ ] Query keys
- [ ] Cache
- [ ] staleTime
- [ ] gcTime
- [ ] Invalidation
- [ ] Prefetching
- [ ] Optimistic updates
- [ ] Infinite queries

## Data UI

- [ ] Pagination
- [ ] Cursor pagination
- [ ] Offset pagination
- [ ] Infinite scroll
- [ ] Search
- [ ] Filter
- [ ] Sort
- [ ] Debounce
- [ ] Throttle
- [ ] Intersection Observer

## Routing

- [ ] Nested routes
- [ ] Dynamic routes
- [ ] Protected routes
- [ ] Public routes
- [ ] Search params
- [ ] Lazy routes
- [ ] Error routes

## State

- [ ] Local state
- [ ] Context
- [ ] Reducer
- [ ] Redux Toolkit
- [ ] RTK Query
- [ ] Server state
- [ ] URL state

## Forms

- [ ] React Hook Form
- [ ] Zod
- [ ] Dynamic fields
- [ ] File upload
- [ ] Server validation

## Performance

- [ ] React.memo
- [ ] useMemo
- [ ] useCallback
- [ ] Profiler
- [ ] Virtualization
- [ ] Lazy loading
- [ ] Code splitting

## UI

- [ ] Modal
- [ ] Drawer
- [ ] Dropdown
- [ ] Tooltip
- [ ] Tabs
- [ ] Accordion
- [ ] Toast
- [ ] Portal
- [ ] Accessibility

## Production

- [ ] Authentication
- [ ] Access token
- [ ] Refresh token
- [ ] Axios interceptors
- [ ] Error boundaries
- [ ] Retry
- [ ] Offline handling
- [ ] Real-time
- [ ] WebSockets
- [ ] Testing

## Modern React

- [ ] Suspense
- [ ] use
- [ ] useActionState
- [ ] useFormStatus
- [ ] useOptimistic
- [ ] Transitions
- [ ] React Compiler concepts
- [ ] Server Components concepts

## Architecture

- [ ] Feature-based architecture
- [ ] Separation of concerns
- [ ] API layer
- [ ] Service layer
- [ ] Hook layer
- [ ] State layer
- [ ] Reusable components

---

# 🚀 Repository Goal

The goal of `main-react-topic` is not simply:

> "I know React."

The goal is:

> **"I can design, build, debug, optimize, test and explain a production-level React application."**

A strong advanced React developer should be comfortable moving through this flow:

```text
User Interaction
      ↓
Component
      ↓
Custom Hook
      ↓
State / URL State
      ↓
TanStack Query / Redux
      ↓
API Layer
      ↓
Backend
      ↓
Cache
      ↓
UI Update
      ↓
Error / Loading / Empty Handling
      ↓
Performance Optimization
```

And when the application becomes large:

```text
React
 ├── Components
 ├── Hooks
 ├── Router
 ├── State
 ├── Server State
 ├── API Layer
 ├── Forms
 ├── Authentication
 ├── Performance
 ├── Testing
 └── Architecture
```

---

# ⭐ Recommended Priority for This Repository

If you want this repository to become especially strong for **MERN development and fresher-to-advanced interview preparation**, prioritize these topics:

```text
⭐⭐⭐⭐⭐

1. Advanced Hooks
2. Custom Hooks
3. TanStack Query
4. Pagination
5. Infinite Scroll
6. Search + Filter + Sort
7. Debouncing
8. Intersection Observer
9. Authentication
10. Axios Interceptors
11. React Router Advanced
12. Redux Toolkit
13. React Hook Form
14. Performance Optimization
15. Lazy Loading
16. Code Splitting
17. Optimistic Updates
18. Error Handling
19. Testing
20. React Architecture
```

Then move into:

```text
⭐⭐⭐⭐

21. RTK Query
22. Portals
23. Compound Components
24. Virtualization
25. File Upload
26. WebSockets
27. Offline Support
28. Suspense
29. Modern React APIs
30. SSR / Hydration
```

---

# 🧠 Rule for Every Topic

For each folder, try to maintain this structure:

```text
topic/
│
├── README.md
├── basic/
├── intermediate/
├── advanced/
├── api-example/
├── production-example/
└── notes.md
```

And answer these five questions:

```text
1. What is it?
2. Why do we need it?
3. How does it work?
4. What problem does it solve?
5. Where would I use it in a real project?
```

---

# 🏆 Final Target

By the end of this repository, you should be able to build an application containing:

```text
Authentication
        +
React Router
        +
Redux Toolkit
        +
TanStack Query
        +
Pagination
        +
Infinite Scroll
        +
Search
        +
Filters
        +
Sorting
        +
Debouncing
        +
Optimistic Updates
        +
File Upload
        +
Forms
        +
Validation
        +
Protected Routes
        +
Lazy Loading
        +
Code Splitting
        +
Error Handling
        +
Testing
        +
Real-Time Features
        +
Production Architecture
```

That becomes your **Main React Advanced Practice Repository**.
