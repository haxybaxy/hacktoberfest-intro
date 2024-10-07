<img src="https://media.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fg2d3pghl35bv6hw1itsu.png" alt="Hacktoberfest pic"/>

# Welcome to Hacktoberfest 
Use this repo as a starting point to interacting with open source projects.

The aim is to teach you how to make contributions via github using pull request standards.


### Instructions
1. **Fork the Repository**  
   - Go to the original repository on GitHub.
   - In the top-right corner of the repository page, click the **Fork** button to create a personal copy of the repository in your own GitHub account. This will create a duplicate of the original repository under your GitHub username.

2. **Clone the Forked Repository to Your Local Machine**  
   - Open a terminal or Git Bash window on your local machine.
   - Run the following command to clone your forked repository:
     ```bash
     git clone https://github.com/<your-username>/hacktoberfest-intro
     ```
     Replace `<your-username>` with your actual GitHub username. This will download all the files from your forked repository to your local machine.

3. **Navigate to the Repository Folder**  
   - Once the cloning process is complete, navigate into the project directory using the `cd` command:
     ```bash
     cd hacktoberfest-intro
     ```

4. **Add Your Name to the List**  
   - In the project directory, locate the file `src/names-list.tsx`.
   - Open the file in your preferred code editor (e.g., VS Code, Sublime Text, etc.).
   - Add your name to the list following the existing format. Ensure that your changes are valid and that no errors are introduced.

5. **Stage and Commit Your Changes**  
   - Once you’ve added your name to `names-list.tsx`, save the file.
   - In your terminal, stage the changes by running:
     ```bash
     git add src/names-list.tsx
     ```
   - Then, commit the changes with a descriptive message:
     ```bash
     git commit -m "Added my name to the names list"
     ```

6. **Push Your Changes to the Remote Repository**  
   - Push your committed changes to the remote branch on GitHub by running the following command:
     ```bash
     git push origin main
     ```
   - This command will upload your changes to your forked repository on GitHub.

7. **Create a Pull Request**  
   - Go to your forked repository on GitHub.
   - You should see a message prompting you to compare and create a pull request. Click the **Compare & pull request** button.
   - Add a title and description to your pull request explaining the changes you've made.
   - Submit the pull request and wait for the repository maintainers to review your contribution and merge it into the main project.

That's it! You've successfully contributed to the repository.


### Sources for hacktoberfest
- <a href="https://hacktoberfest.com/" target="_blank">Official Hacktoberfest website.</a>
- <a href="https://dev.to/bobbyiliev/9-open-source-projects-to-contribute-to-hacktoberfest-2024-42bm" target="_blank">Blog with project recommendations.</a>
- Search `good first issue` on github.
