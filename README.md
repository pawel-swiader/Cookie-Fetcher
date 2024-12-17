# Cookie Fetcher: Test Cookie Behavior 🍪

## What's the Deal? 🤔
Even though `localhost` and `127.0.0.1` point to the same address, browsers treat them as **separate domains**. This tool is built to test how cookies behave differently for these two "identical" addresses.
<p align="center">
  <img src="https://github.com/user-attachments/assets/31cf6a2e-f65f-4aa4-97e2-9582a1c62bb7" alt="Cookie Fetcher Giph"/>  
</p>  

## Why It Matters 👀
**Cookie Storage**: Localhost and 127.0.0.1 handle cookies differently.  
**Cookie Modyfication**: Modify cookies to see how changes affect their behaviour.  
**CORS Testing**: Experiment with cross-origin resource sharing (CORS) headers.
## How to Use 💻
**Clone the Repo**:
```bash
git clone git@github.com:pawel-swiader/Cookie-Fetcher.git
cd cookie-fetcher
```
**Install Dependencies**:
```bash
npm install
```
**Start the App**:
```bash
npm start
```

Test cookies on:

http://localhost:3000/cookie  
http://127.0.0.1:3000/cookie

## The Code 🔥  
**Backend**: Express sets a 5-second cookie.  
**Frontend**: Fetches and displays cookies for both domains.

## Final Thoughts 👑
**Cookie Fetcher** is the perfect tool for testing cookies in different domains and experimenting with CORS. Modify the code, break it, fix it, and learn by doing — real-time results make it easy.
