import json

def merge_json(file1_path, file2_path, output_path):
    # Load JSON data from files
    with open(file1_path, 'r', encoding='utf-8') as file1:
        data1 = json.load(file1)

    with open(file2_path, 'r', encoding='utf-8') as file2:
        data2 = json.load(file2)

    # Merge the two JSON objects
    merged_data = merge(data1, data2)

    # Write the merged data to a new JSON file
    with open(output_path, 'w', encoding='utf-8') as output_file:
        json.dump(merged_data, output_file, ensure_ascii=False, indent=2)

def merge(obj1, obj2):
    if isinstance(obj1, list) and isinstance(obj2, list):
        return obj1 + obj2
    elif isinstance(obj1, dict) and isinstance(obj2, dict):
        result = obj1.copy()

        for key, value in obj2.items():
            if key in result:
                result[key] = merge(result[key], value)
            else:
                result[key] = value

        return result
    else:
        # Handle other cases based on your specific requirements
        return obj2

# Example usage
file1_path = 'history_tobi.json'
file2_path = 'history_jonas.json'
output_path = 'history_merged.json'

file3_path = 'history_merged.json'
file4_path = '../public/export_old.json'
output_public = '../public/export.json'

#merge_json(file1_path, file2_path, output_path)
merge_json(file3_path, file4_path, output_public)