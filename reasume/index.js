        function generateResume() {
            const name = document.getElementById("name").value;
            const branch = document.getElementById("branch").value;
            const university = document.getElementById("university").value;
            const language = document.getElementById("language").value;

            const skillElems = document.querySelectorAll('input[name="skills"]:checked');
            const skills = Array.from(skillElems).map(el => el.value);

            document.getElementById("resName").textContent = name;
            document.getElementById("resBranch").textContent = branch;
            document.getElementById("resUniversity").textContent = university;
            document.getElementById("resLanguage").textContent = language;

            const skillsList = document.getElementById("resSkills");
            skillsList.innerHTML = "";
            skills.forEach(skill => {
                const li = document.createElement("li");
                li.textContent = skill;
                skillsList.appendChild(li);
            });

            document.getElementById("resume").style.display = "block";
        }