  <!-- JavaScript for buttons -->
  <script>
    function showSection(sectionId) {
      const sections = document.querySelectorAll('section');
      sections.forEach(sec => sec.style.display = 'none');
      document.getElementById(sectionId).style.display = 'block';
    }

    // Show About section by default
    showSection('about');
  </script>

</body>
</html>
