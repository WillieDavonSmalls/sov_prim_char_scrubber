function buildTable(results) {
    var html = `<table id="t01">
        <tr>
            <th>ACCNTNUM</th>
            <th>LOCNUM</th>
            <th>OCCSCHEME</th>
            <th>OCCTYPE</th>
            <th>OCC RANK</th>
            <th>YEARBUILT</th>
            <th>NUMSTORIES</th>
            <th>BLDGSCHEME</th>
            <th>BLDGCLASS</th>
            <th>BLDG RANK</th>
        </tr>
    `;

    results.forEach(function(result) {
        html += `
            <tr>
                <td>${result.accountNum}</td>
                <td>${result.locNum}</td>
                <td>ATC</td>
                <td>${result.chosenOcc}</td>
                <td>${result.distance}</td>
                <td>${result.yearBuilt}</td>
                <td>${result.numstories}</td>
                <td>${result.chosenBldgScheme}</td>
                <td>${result.chosenBldg}</td>
                <td>${result.distBldg}</td>
            </tr>
        `;
    });

    html += '</table>';

    return html;
}

jQuery(document).ready(function() {
    var form = jQuery('#form');
    form.find('button').on('click', function() {
        var locations = form.find('textarea').val();

        jQuery.ajax({
            type: 'POST',
            url: '/api/occupancies',
            dataType: 'json',
            data: locations,
            contentType: "application/json; charset=utf-8",
            success: function(results) {
                // console.log(results);
                jQuery('table').remove();
                form.after(buildTable(results))
            },
            error: function(e) {
                console.error(e);
            }
        })
    });
});