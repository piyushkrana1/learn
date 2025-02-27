import os

def add_readme_to_inner_folders(root_dir):
    # Walk through the directory tree
    for root, dirs, files in os.walk(root_dir, topdown=False):
        # If the directory has no subdirectories (inner-most directory)
        if not dirs:
            readme_path = os.path.join(root, "README.md")
            # If README.md doesn't already exist, create it
            if not os.path.exists(readme_path):
                with open(readme_path, "w") as readme_file:
                    readme_file.write("# This is the README file for " + os.path.basename(root))
                    print(f"Created README.md in: {root}")

if __name__ == "__main__":
    # Replace this with the root directory where you want to start the process
    root_directory = "."
    add_readme_to_inner_folders(root_directory)
